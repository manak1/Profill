<template>
  <section v-if="cards" class="container py-8 px-4 mx-auto">
    <div class="w-11/12 mx-auto flex justify-between">
      <div v-for="card in cards" :key="card.index" class="pb-8 px-2">
        <CardBody :title="card.title" :text="card.text">
          <template v-slot:submit>
            <div class="text-center px-6 py-4">
              <nuxt-link
                :to="`/${card.template}/step1`"
                class="inline-block w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded"
              >
                この名刺を選択する
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
      cards: null,
    }
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    this.cards = templates
  },
}
</script>

<style />
