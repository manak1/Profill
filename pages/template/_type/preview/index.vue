<template>
  <section class="container py-8 px-4 mx-auto">
    <component :is="componentTemplate" />
  </section>
</template>

<script>
import Template1 from "@/components/template/Template1"
export default {
  components: { Template1 },
  data() {
    return {
      componentTemplate: "Template1",
    }
  },
  computed: {
    slug() {
      return this.$route.params.type
    },
  },
}
</script>

<style scoped></style>
