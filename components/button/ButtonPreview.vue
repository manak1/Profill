<template>
  <nuxt-link
    :to="link"
    class="inline-block w-10/12 lg:w-1/2 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
  >
    プレビュー
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "/",
    },
  },
}
</script>

<style scoped></style>
