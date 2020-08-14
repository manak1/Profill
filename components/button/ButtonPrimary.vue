<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    :class="[
      { 'opacity-50': isValid },
      { 'hover:bg-blue-500': isValid },
      { 'pointer-events-none': isValid },
    ]"
    @click="$emit('linkToNext')"
  >
    次へ
  </button>
</template>

<script>
export default {
  props: {
    isValid: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
