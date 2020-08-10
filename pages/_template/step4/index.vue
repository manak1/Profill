<template>
  <div v-if="form">
    <PagesBody :title="'ダウンロード'">
      <template v-slot:body>
        ダウンロードボタン
      </template>
    </PagesBody>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: null,
    }
  },
  computed: {
    slug() {
      return this.$route.params.template
    },
  },
}
</script>

<style scoped></style>
