<template>
  <div class="p-hero bg-indigo-100 mb-12">
    <section class="container py-8 px-4 mx-auto">
      <div class="lg:flex lg:justify-center mt-8 lg:mt-0 lg:py-32">
        <div class="p-hero__textBox text-center mb-16 lg:text-left lg:mb-0">
          <h2 class="p-hero__text mb-4 text-2xl lg:text-3xl text-gray-700">
            バーチャル名刺を作成しよう!
          </h2>
          <p class="text-gray-700 mb-6">
            Profill(プロフィル)はWEB上で簡単にバーチャル背景で使える名刺を作成できるアプリです。
          </p>
          <div
            class="container mx-auto flex justify-center lg:justify-start space-x-4"
          >
            <button-twitter />
            <button-facebook />
          </div>
        </div>
        <p class="flex justify-center lg:justify-start lg:pl-4">
          <img
            src="~assets/images/hero/hero.svg"
            width="420"
            height="336"
            alt="Profill"
          />
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-hero {
  &__text {
    font-weight: bold;
  }
}
@media screen and (min-width: 1024px) {
  .p-hero__textBox {
    width: calc(100% - 500px);
  }
}
</style>
