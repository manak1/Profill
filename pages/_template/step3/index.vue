<template>
  <div v-if="form">
    <PagesBody :title="'連絡先'">
      <template v-slot:body>
        <FormContact :form="form" @input="inputForm" />
        <div class="text-center mb-20">
          <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
          <ButtonPrimary class="mx-6" @linkToNext="linkToNext" />
        </div>
        <div class="text-center">
          <nuxt-link
            :to="`/${slug}/preview`"
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
    this.form = { ...this.step3 }
  },
  computed: {
    ...formMapper.mapState(["step3"]),
    slug() {
      return this.$route.params.template
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_CONTACT"]),
    inputForm() {
      this.SET_CONTACT(this.form)
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
