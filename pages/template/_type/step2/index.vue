<template>
  <PagesBody :title="'住所'">
    <template v-slot:body>
      <FormZip :form="form" />
    </template>
  </PagesBody>
</template>

<script>
export default {
  data() {
    return {
      form: {
        post_code: null,
        zip: null,
      },
    }
  },
}
</script>

<style scoped></style>
