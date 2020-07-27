<template>
  <PagesBody :title="'連絡先'">
    <template v-slot:body>
      <FormContact :form="form" />
    </template>
  </PagesBody>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mail: null,
        tel: null,
      },
    }
  },
}
</script>

<style scoped></style>
