<template>
  <section class="container py-16 px-4 mx-auto bg-white">
    <h2 class="font-bold text-gray-700">
      {{ title }}
    </h2>
    <div class="mb-16">
      <EventObjectStepBar />
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
