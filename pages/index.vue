<template>
  <div>
    <hero-section />
    <template-section :cards="cards" />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  components: {
    HeroSection: () => import("./-HeroSection"),
    TemplateSection: () => import("./-TemplateSection"),
  },
  asyncData() {
    const { templates } = require("@/static/data/templates.json")
    return {
      cards: templates,
    }
  },
}
</script>

<style scoped></style>
