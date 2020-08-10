<template>
  <section v-if="types" class="container py-8 px-4 mx-auto">
    <div class="w-11/12 mx-auto flex flex-wrap justify-center">
      <div v-for="type in types" :key="type.type_id" class="pb-8 px-2">
        <CardBody :title="''" :text="''">
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      types: null,
    }
  },
  computed: {
    template() {
      return this.$route.params.template
    },
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    const template = templates.find((item) => item.name === this.template)
    this.types = template.types
  },
}
</script>

<style scoped></style>
