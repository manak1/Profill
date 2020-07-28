<template>
  <PagesBody :title="'プロフィール'">
    <template v-slot:body>
      <FormProfile :form="form" />
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
        first_name: null,
        last_name: null,
        first_name_kana: null,
        last_name_kana: null,
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
      this.$router.push(`/template/${this.slug}/step2`)
    },
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
