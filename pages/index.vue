<template>
  <div>
    <div class="p-hero relative">
      <img
        class="object-cover w-full h-full mx-auto"
        src="@/assets/images/hero/bgObject.svg"
        alt="トップ画像"
      />
      <p
        class="absolute transform container -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-18 sm:px-20 lg:px-0 text-center px-20"
      >
        <img
          class="object-cover w-1/4 h-1/4 mx-auto mb-8"
          src="@/assets/images/hero/Logo.svg"
          alt="トップ画像"
        />
        <span
          class="lg:text-4xl sm:text-2xl text-base text-center text-white lg:mb-12 mb-6 font-bold block"
        >
          ブラウザ上で簡単にバーチャル名刺が作れます！
        </span>
        <span
          class="block lg:text-4xl sm:text-2xl text-sm text-center text-white lg:mb-5 md:mx-4"
        >
          画像を作成・ダウンロードすると、
          <br />
          zoomなどのオンライン会議でバーチャル名刺として利用できます。
        </span>
      </p>
    </div>
    <div class="container mx-auto flex justify-center space-x-4">
      <button-twitter />
      <button-facebook />
    </div>
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
    <LayoutFooter />
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

<style scoped>
.p-hero {
  top: -80px;
}
</style>
