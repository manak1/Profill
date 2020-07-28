<template>
  <PagesBody :title="'会社情報'">
    <template v-slot:body>
      <FormCompany :form="form" />
      <div class="text-center">
        <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
        <ButtonPrimary class="mx-6" @linkToNext="linkToNext" />
      </div>
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
  computed: {
    slug() {
      return this.$route.params.type
    },
  },
  methods: {
    linkToNext() {
      this.$router.push(`/template/${this.slug}/step4`)
    },
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
