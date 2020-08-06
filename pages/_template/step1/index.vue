<template>
  <div v-if="form">
    <PagesBody :title="'プロフィール'">
      <template v-slot:body>
        <FormProfile v-model="form" @input="inputForm" />
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
    this.form = { ...this.step1 }
  },
  computed: {
    ...formMapper.mapState(["step1"]),
    slug() {
      return this.$route.params.template
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_PROFILE"]),
    inputForm() {
      this.SET_PROFILE(this.form)
    },
    linkToNext() {
      this.$router.push(`/${this.slug}/step2`)
    },
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
