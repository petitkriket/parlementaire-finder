<script setup>
import { onMounted, nextTick } from "vue";
import TwitterWidgetsLoader from "twitter-widgets";

const props = defineProps({
  username: {
    type: String,
  },
});

const addTwitterWidget = () => {
  TwitterWidgetsLoader.load();
  const twttr = window.twttr;
  twttr.widgets.load();
};

onMounted(() => nextTick(() => addTwitterWidget()));
</script>

<template>
  <a
    data-height="75vh"
    :href="`https://twitter.com/${props.username}?ref_src=twsrc%5Etfw`"
    class="twitter-timeline"
    data-chrome="noheader nofooter noborders transparent"
  />
</template>
