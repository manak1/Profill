<template>
  <PagesBody :title="'プロフィール'">
    <template v-slot:body>
      <FormProfile :form="form" />
    </template>
  </PagesBody>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        first_name_kana: null,
        last_name_kana: null,
      },
    }
  },
}
</script>

<style scoped></style>
