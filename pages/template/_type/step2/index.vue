<template>
  <div v-if="form">
    <PagesBody :title="'住所'">
      <template v-slot:body>
        <FormZip :form="form" @input="inputForm" />
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
    this.form = { ...this.step2 }
  },
  computed: {
    ...formMapper.mapState(["step2"]),
    slug() {
      return this.$route.params.type
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_ZIP"]),
    inputForm() {
      this.SET_ZIP(this.form)
    },
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
