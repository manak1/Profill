<template>
  <div v-if="form">
    <PagesBody :title="'連絡先'">
      <template v-slot:body>
        <FormContact :form="form" @input="inputForm" />
        <div class="text-center">
          <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
          <ButtonPrimary class="mx-6" @linkToNext="linkToNext" />
        </div>
      </template>
    </PagesBody>
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
export default {
  data() {
    return {
      form: null,
    }
  },
  mounted() {
    this.form = { ...this.step3 }
  },
  computed: {
    ...formMapper.mapState(["step3"]),
    slug() {
      return this.$route.params.type
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_CONTACT"]),
    inputForm() {
      this.SET_CONTACT(this.form)
    },
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
