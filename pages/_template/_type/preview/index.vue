<template>
  <section class="container py-8 px-4 mx-auto">
    <div v-if="componentData">
      <component :is="componentData" />
      <div>
        ここに色選択
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    template1type1: () => import(`@/components/template/template1/type1`),
  },
  data() {
    return {
      componentData: null,
    }
  },
  computed: {
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    const template = templates.find((item) => item.name === this.template)
    const type = template.types.find((item) => item.name === this.type)
    this.componentData = `${template.name}${type.name}`
  },
}
</script>

<style scoped></style>
