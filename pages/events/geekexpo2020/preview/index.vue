<template>
  <section class="container py-8 px-4 mx-auto">
    <EventCardTemplate />
    <div
      class="lg:flex lg:justify-center lg:-space-x-8 items-center text-center"
    >
      <div class="mt-8 lg:mt-12 mx-auto w-full lg:w-1/3">
        <p class="font-bold">
          文字色
        </p>
        <object-color-picker type="swatches" class="mt-4" />
      </div>
    </div>

    <div class="mt-12 lg:mt-16">
      <div class="mt-10 text-left">
        <a
          href="#"
          class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
          @click.prevent="$router.go(-1)"
        >
          戻る
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ObjectColorPicker from "@/components/object/ObjectColorPicker"

export default {
  components: {
    ObjectColorPicker,
  },
}
</script>

<style scoped></style>
