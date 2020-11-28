<template>
  <EventPagesBody :title="`プロフィール`">
    <template v-slot:body>
      <EventFormProfile />
      <div class="text-center mb-20 ml-32">
        <ButtonLink :link="`/events/geekexpo2020/step2`" :text="`次へ`" />
      </div>
      <div class="text-center mb-4">
        <ButtonPreview :link="`/events/geekexpo2020/preview`" />
      </div>
      <div class="text-center">
        <nuxt-link
          :to="`/events/geekexpo2020`"
          class="inline-block bg-white w-10/12 lg:w-1/2 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded"
        >
          デザイン選択へ戻る
        </nuxt-link>
      </div>
    </template>
  </EventPagesBody>
</template>

<script>
export default {}
</script>

<style scoped></style>
