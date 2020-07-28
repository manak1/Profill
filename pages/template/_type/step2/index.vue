<template>
  <PagesBody :title="'住所'">
    <template v-slot:body>
      <FormZip :form="form" />
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
        post_code: null,
        zip: null,
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
      this.$router.push(`/template/${this.slug}/step3`)
    },
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
