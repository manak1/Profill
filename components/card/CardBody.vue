<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="w-full bg-gray-200 px-8 py-8">
      <img class="w-full" src="https://placehold.jp/376x224.png" alt="" />
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ title }}
      </div>
      <p class="text-gray-700 text-base">
        {{ text }}
      </p>
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
  },
}
</script>

<style />
