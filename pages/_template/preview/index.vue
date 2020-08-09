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
import Template1 from "@/components/template/Template1"
export default {
  components: {
    Template1,
  },
  data() {
    return {
      componentData: null,
    }
  },
  computed: {
    slug() {
      return this.$route.params.template
    },
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    this.componentData = this.templateData(templates)
  },
  methods: {
    templateData(templates) {
      const { template } = templates.find((item) => item.template === this.slug)
      return template
    },
  },
}
</script>

<style scoped></style>
