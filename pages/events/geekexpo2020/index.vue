<template>
  <section class="container mt-8 py-8 px-4 mx-auto">
    <div class="flex flex-wrap justify-center">
      <div class="max-w-sm pb-8 px-2">
        <CardBody
          :title="`技育EXPO2020`"
          :text="``"
          :image="`/templates/events/geekexpo2020/type1.png`"
          :custome="false"
        >
          <template v-slot:submit>
            <div class="text-center px-6 py-4">
              <nuxt-link
                :to="`/events/geekexpo2020/step1`"
                class="inline-block w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
              >
                入力を始める
              </nuxt-link>
            </div>
          </template>
        </CardBody>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
