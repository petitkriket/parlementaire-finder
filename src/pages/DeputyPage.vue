<script setup lang="ts">
import { useDeputyQuery } from "@/queries/deputy.js";

const props = defineProps({
  id: {
    type: Number,
  },
});

const { isSuccess, data: deputy } = useDeputyQuery(props.id);
const hasHistory = () => window.history.length > 2;
</script>

<template>
  <main>
    <n-button
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      class="my-5 btn btn-outline-success"
    >
      &laquo; Back
    </n-button>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24" v-if="isSuccess">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              {{ deputy.organizationName }}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              {{ deputy.fullName }}
            </h1>

            <n-tabs type="line" size="large">
              <n-tab-pane name="description" tab="Description">
                <div>
                  <p class="leading-relaxed mb-4">
                    Fam locavore kickstarter distillery. Mixtape chillwave
                    tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                    inxigo juiceramps cornhole raw denim forage brooklyn.
                    Everyday carry +1 seitan poutine tumeric. Gastropub blue
                    bottle austin listicle pour-over, neutra jean.
                  </p>

                  <div class="flex border-t border-gray-200 py-2">
                    <span class="text-gray-500">Circonscription</span>
                    <span class="ml-auto text-gray-900">
                      {{ deputy.districtName }}
                    </span>
                  </div>

                  <div class="flex border-t border-gray-200 py-2">
                    <span class="text-gray-500">Occupation</span>
                    <span class="ml-auto text-gray-900">
                      {{ deputy.occupation }}
                    </span>
                  </div>

                  <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span class="text-gray-500">Seat</span>
                    <span class="ml-auto text-gray-900">
                      {{ deputy.nationalAssemblySeat }}
                    </span>
                  </div>
                </div>
              </n-tab-pane>

              <n-tab-pane name="activity" tab="Activity">Votes</n-tab-pane>

              <n-tab-pane
                name="tweets"
                tab="Tweets"
                :disabled="!deputy.twitter"
              >
                Tweets
              </n-tab-pane>
            </n-tabs>
          </div>

          <img
            :alt="deputy.fullName"
            class="lg:w-1/3 w-full lg:h-1/3 h-64 object-cover object-center rounded-xl grayscale"
            :src="`https://www.nosdeputes.fr/depute/photo/${deputy.slug}/600`"
          />
        </div>
      </div>
    </section>
  </main>
</template>
