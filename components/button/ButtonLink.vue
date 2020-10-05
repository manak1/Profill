<template>
  <nuxt-link
    :to="link"
    class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
  >
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "/",
    },
    text: {
      type: String,
      default: "次へ",
    },
  },
}
</script>

<style scoped></style>
