<template>
  <EventPagesBody :title="'ヒトコト'">
    <template v-slot:body>
      <EventFormContent />
      <div class="text-center mb-20">
        <ButtonLink :link="`/events/geekexpo2020/step2`" :text="`戻る`" />
        <ButtonLink :link="`/events/geekexpo2020/step4`" :text="`次へ`" />
      </div>
      <div class="text-center">
        <ButtonPreview :link="`/events/geekexpo2020/preview`" />
      </div>
    </template>
  </EventPagesBody>
</template>

<script>
export default {}
</script>

<style scoped></style>
