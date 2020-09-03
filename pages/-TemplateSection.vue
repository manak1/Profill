<template>
  <section v-if="cards" class="container mt-12 py-8 px-4 mx-auto">
    <div class="flex flex-wrap justify-center">
      <div v-for="card in cards" :key="card.id" class="max-w-sm pb-8 px-2">
        <CardBody
          :title="card.title"
          :text="card.text"
          :image="card.image"
          :custom="false"
        >
          <template v-slot:submit>
            <div class="text-center px-6 py-4">
              <nuxt-link
                :to="`/${card.name}`"
                class="inline-block w-full bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded"
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
  props: {
    cards: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style scoped></style>
