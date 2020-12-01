<template>
  <div class="shadow-lg relative">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div class="w-2/5 px-8 py-6">
        hoge
      </div>
      <div class="w-2/5 px-8 py-6">
        hoge
      </div>
      <component :is="`geekexpo2020`" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    geekexpo2020: () =>
      import(
        `@/components/events/geekexpo2020/templates/designs/EventDesignType1`
      ),
  },
  computed: {},
}
</script>

<style scoped></style>
