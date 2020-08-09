<template>
  <section v-if="card" class="container py-8 px-4 mx-auto">
    <CardBody :title="card.title" :text="card.text">
      <template v-slot:submit>
        <div class="text-center px-6 py-4">
          <nuxt-link
            :to="`/${card.template}/step1`"
            class="inline-block w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
          >
            入力を始める
          </nuxt-link>
        </div>
      </template>
    </CardBody>
  </section>
</template>

<script>
export default {
  data() {
    return {
      card: null,
    }
  },
  computed: {
    slug() {
      return this.$route.params.template
    },
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    this.card = this.templateData(templates)
  },
  methods: {
    templateData(templates) {
      const result = templates.find((item) => item.template === this.slug)
      return result
    },
  },
}
</script>

<style scoped></style>
