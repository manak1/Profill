<template>
  <div v-if="form">
    <PagesBody :title="'お名前'">
      <template v-slot:body>
        <FormProfile v-model="form" @input="inputForm" />
        <div class="text-center mb-20 ml-32">
          <nuxt-link
            :to="`/${template}/${type}/step2`"
            class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
            :is-valid="form.isValid"
          >
            次へ
          </nuxt-link>
        </div>
        <div class="text-center mb-20">
          <nuxt-link
            :to="`/${template}/${type}/preview`"
            class="inline-block bg-white w-10/12 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded"
          >
            プレビュー
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="`/${template}`"
            class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
          >
            デザイン選択へ
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
    this.form = { ...this.step1 }
  },
  computed: {
    ...formMapper.mapState(["step1"]),
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_PROFILE"]),
    inputForm() {
      this.SET_PROFILE(this.form)
    },
  },
}
</script>

<style scoped></style>
