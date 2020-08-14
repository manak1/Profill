<template>
  <div v-if="form">
    <PagesBody :title="'SNS'">
      <template v-slot:body>
        <FormSocialmedia v-model="form" @input="inputForm" />
        <div class="text-center mb-20">
          <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
          <ButtonPrimary
            class="mx-6"
            :is-valid="form.isValid"
            @linkToNext="linkToNext"
          />
        </div>
        <div class="text-center">
          <nuxt-link
            :to="`/${template}/${type}/preview`"
            class="inline-block bg-white w-10/12 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded"
          >
            プレビュー
          </nuxt-link>
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
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_SNS"]),
    inputForm() {
      this.SET_SNS(this.form)
    },
    linkToNext() {
      this.$router.push(`/${this.template}/${this.type}/step3`)
    },
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
