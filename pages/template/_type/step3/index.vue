<template>
  <PagesBody :title="'連絡先'">
    <template v-slot:body>
      <FormContact :form="form" />
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
        mail: null,
        tel: null,
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
