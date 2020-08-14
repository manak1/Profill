<template>
  <component :is="template" :type="type" />
</template>

<script>
export default {
  components: {
    template1: () => import(`@/components/templates/template1/CardTemplate1`),
    template2: () => import(`@/components/templates/template2/CardTemplate2`),
    template3: () => import(`@/components/templates/template3/CardTemplate3`),
    template4: () => import(`@/components/templates/template4/CardTemplate4`),
  },
  props: {
    template: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
