<template>
  <PagesBody :title="'会社情報'">
    <template v-slot:body>
      <FormCompany :form="form" />
    </template>
  </PagesBody>
</template>

<script>
export default {
  data() {
    return {
      form: {
        organization: null,
        department: null,
      },
    }
  },
}
</script>

<style scoped></style>
