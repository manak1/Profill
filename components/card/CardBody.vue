<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="w-full bg-gray-200 px-8 py-8">
      <img class="w-full" :src="image" alt="" />
    </div>
    <div class="px-6 py-4 relative">
      <div class="font-bold text-xl flex space-between mb-2 space-x-3">
        <span class="inline-block text-gray-700 w-1/2"> {{ title }}</span>
        <span
          v-if="custom"
          class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700"
        >
          カラー変更可
        </span>
      </div>
    </div>
    <slot name="submit" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    custom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.c-label {
  top: 0;
  right: 15%;
}
</style>
