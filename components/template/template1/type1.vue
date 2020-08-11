<template>
  <div class="shadow-lg">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div class="w-2/5 px-8 py-6" :style="backgroundColor">
        <h2 class="pb-32 text-4xl font-bold text-gray-700">
          {{ result.organization }}
        </h2>
        <div class="pb-32 text-3xl font-bold text-gray-700">
          {{ result.first_name }} {{ result.last_name }}
        </div>
        <div class="pb-2 text-2xl font-bold text-gray-700">
          {{ result.organization }}
        </div>
        <div class="text-gray-700">
          {{ result.zip }}
        </div>
        <div class="text-gray-700">
          {{ result.mail }}
        </div>
        <div class="text-gray-700">
          {{ result.tel }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
export default {
  computed: {
    ...formMapper.mapGetters(["result"]),
    backgroundColor() {
      return {
        "background-color": this.result.main_color,
      }
    },
  },
}
</script>

<style scoped></style>
