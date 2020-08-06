<template>
  <div v-if="form">
    <PagesBody :title="'会社情報'">
      <template v-slot:body>
        <FormCompany :form="form" @input="inputForm" />
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
    this.form = { ...this.step4 }
  },
  computed: {
    ...formMapper.mapState(["step4"]),
    slug() {
      return this.$route.params.template
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_COMPANY"]),
    inputForm() {
      this.SET_COMPANY(this.form)
    },
    linkToNext() {
      this.$router.push(`/${this.slug}/step4`)
    },
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
