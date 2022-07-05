<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import useDepartments from "@/composables/useDepartments.js";
import { useOrganizationsQuery } from "@/queries/organization.js";
import { getBirthDate } from "@/helpers/deputy.js";

const { t } = useI18n();
const ageRange = ref([25, 70]);
const staffCount = ref([0, 5]);
const termsCount = ref([1, 3]);
const emit = defineEmits(["reset", "change"]);
const change = (key, value) => emit("change", { [key]: value, _page: "" });

const onRangeChange = (field, value) =>
  emit("change", {
    [`${field}_lte`]: value[0],
    [`${field}_gte`]: value[1],
    _page: "",
  });

const onAgeRangeChange = (field, value) => {
  const [minAge, maxAge] = value;
  onRangeChange(field, [getBirthDate(minAge), getBirthDate(maxAge)]);
};

const { isLoading: organizationsAreLoading, data: orgData } =
  useOrganizationsQuery({
    active: true,
  });

const organizationsOptions = computed(() => {
  return orgData?.value?.organizations.map(
    ({ name: label, acronym: value }) => ({ label, value } || [])
  );
});

const { isLoading: departmentsAreLoading, data } = useDepartments();

const departmentsOptions = computed(() => {
  return data?.value?.departments.map(
    ({ nom: label, code: value }) =>
      ({ label: `${label} (${value})`, value } || [])
  );
});

const genderOptions = [
  {
    label: t("femaleOptionLabel"),
    value: "F",
  },
  {
    label: t("maleOptionLabel"),
    value: "M",
  },
];
</script>

<template>
  <div>
    <div>
      <n-h6>{{ t("departmentFilterLabel") }}</n-h6>
      <n-select
        :value="$route.query.departmentNumber"
        :loading="departmentsAreLoading"
        :options="departmentsOptions"
        multiple
        filterable
        clearable
        @update:value="change('departmentNumber', $event)"
      />
    </div>

    <n-divider />

    <div>
      <n-h6>{{ t("politicalPartyFilterLabel") }}</n-h6>
      <n-select
        :value="$route.query.organizationAcronym"
        :loading="organizationsAreLoading"
        :options="organizationsOptions"
        multiple
        clearable
        @update:value="change('organizationAcronym', $event)"
      />
    </div>

    <n-divider />

    <div>
      <n-h6>{{ t("genderFilterLabel") }}</n-h6>
      <n-select
        :value="$route.query.gender"
        :options="genderOptions"
        multiple
        clearable
        @update:value="change('gender', $event)"
      />
    </div>

    <n-divider />

    <div>
      <n-h6>{{ t("ageFilterLabel") }}</n-h6>
      <n-slider
        v-model:value="ageRange"
        :step="1"
        :min="20"
        :max="75"
        :marks="{ 20: 20, 75: 75 }"
        range
        @update:value="onAgeRangeChange('bornOn', $event)"
      />
    </div>

    <n-divider />

    <div>
      <n-h6>{{ t("staffCountFilterLabel") }}</n-h6>
      <n-slider
        v-model:value="staffCount"
        :step="1"
        :min="0"
        :max="5"
        :marks="{ 0: 0, 5: 5 }"
        range
        @update:value="onRangeChange('staffCount', $event)"
      />
    </div>

    <n-divider />

    <div>
      <n-h6>{{ t("termsCountFilterLabel") }}</n-h6>
      <n-slider
        v-model:value="termsCount"
        :step="1"
        :min="1"
        :max="3"
        :marks="{ 1: 1, 3: 3 }"
        range
        @update:value="onRangeChange('termsCount', $event)"
      />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "femaleOptionLabel": "Female",
    "maleOptionLabel": "Male",
    "departmentFilterLabel": "Department",
    "politicalPartyFilterLabel": "Political party",
    "genderFilterLabel": "Genre",
    "ageFilterLabel": "Age",
    "staffCountFilterLabel": "Staff count",
    "termsCountFilterLabel": "Terms count",
  },
  "fr": {
    "femaleOptionLabel": "Femme",
    "maleOptionLabel": "Homme",
    "departmentFilterLabel": "Département",
    "politicalPartyFilterLabel": "Parti politique",
    "genderFilterLabel": "Genre",
    "ageFilterLabel": "Âge",
    "staffCountFilterLabel": "Nombre de collaborateurs",
    "termsCountFilterLabel": "Nombre de mandats",
  },

}
</i18n>
