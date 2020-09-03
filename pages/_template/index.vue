<template>
  <section v-if="types" class="container mt-8 py-8 px-4 mx-auto">
    <div class="flex flex-wrap justify-center">
      <div v-for="type in types" :key="type.type_id" class="max-w-sm pb-8 px-2">
        <CardBody
          :title="type.title"
          :text="type.text"
          :image="type.image"
          :custom="type.custom"
        >
          <template v-slot:submit>
            <div class="text-center px-6 py-4">
              <nuxt-link
                :to="`/${template}/${type.name}/step1`"
                class="inline-block w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
              >
                入力を始める
              </nuxt-link>
            </div>
          </template>
        </CardBody>
      </div>
      <div v-if="isTypeOdd" class="w-full max-w-sm"></div>
    </div>
    <div class="text-center lg:w-10/12">
      <nuxt-link
        to="/"
        class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
      >
        トップページへ
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  asyncData({ params }) {
    const { templates } = require("@/static/data/templates.json")
    const res = templates.find((item) => item.name === params.template)
    return {
      types: res.types,
    }
  },
  computed: {
    template() {
      return this.$route.params.template
    },
    isTypeOdd() {
      return this.types.length % 2 !== 0
    },
  },
}
</script>

<style scoped></style>
