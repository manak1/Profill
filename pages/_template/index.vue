<template>
  <section class="container py-8 px-4 mx-auto">
    {{ this.slug }}
  </section>
</template>

<script>
export default {
  computed: {
    slug() {
      return this.$route.params.template
    },
  },
}
</script>

<style scoped></style>
