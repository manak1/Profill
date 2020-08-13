<template>
  <div>
    <div class="relative">
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/hero/Herosite-PC.svg"
        alt="トップ画像"
      />
      <p
        class="absolute transform container -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-12 px-12 md:px-0"
      >
        <span
          class="lg:text-5xl md:text-4xl text-3xl text-center text-white lg:mb-5 font-bold block"
        >
          タイトル
        </span>
        <br />
        <span
          class="block lg:text-4xl md:text-3xl text-2xl text-center text-white mb-5 md:mx-4"
        >
          PC、スマホで簡単にバーチャル名刺が作れます。
          Zoomなどのオンライン会議の際に、ほげほげほほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </span>
      </p>
    </div>
    <section class="container mx-auto">
      <a
        href="https://twitter.com/share"
        class="twitter-share-button"
        data-text="#Profill"
        data-show-count="false"
        >Tweet</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </section>
    <section v-if="cards" class="container py-8 px-4 mx-auto">
      <div class="flex flex-wrap justify-center">
        <div v-for="card in cards" :key="card.id" class="max-w-sm pb-8 px-2">
          <CardBody :title="card.title" :text="card.text" :image="card.image">
            <template v-slot:submit>
              <div class="text-center px-6 py-4">
                <nuxt-link
                  :to="`/${card.name}`"
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
  </div>
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

<style scoped></style>
