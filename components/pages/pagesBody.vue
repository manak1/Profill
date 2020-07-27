<template>
  <section class="container py-8 px-4 mx-auto">
    <h2>{{ title }}</h2>
    <ObjectStepBar />
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
