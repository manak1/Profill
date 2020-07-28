<template>
  <div>
    {{ this.slug }}
  </div>
</template>

<script>
export default {
  computed: {
    slug() {
      return this.$route.params.type
    },
  },
}
</script>

<style scoped></style>
