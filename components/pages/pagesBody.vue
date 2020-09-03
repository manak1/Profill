<template>
  <section class="container mt-8 py-8 px-4 mx-auto">
    <h2 class="font-bold text-gray-700">
      {{ title }}
    </h2>
    <div class="mb-16">
      <ObjectStepBar />
    </div>
    <slot name="body" />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
