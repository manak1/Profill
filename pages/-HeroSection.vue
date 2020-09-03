<template>
  <div class="p-hero bg-indigo-100 mb-12">
    <section class="container py-8 mx-auto">
      <div class="p-hero__position p-hero__image"></div>
      <div class="p-hero__textBox pl-4">
        <h2 class="p-hero__text text-gray-700">
          <span class="p-hero__text--emphasize">P</span>rofill
        </h2>
        <p class="p-hero__text--sm text-gray-700">
          WEB上で簡単にバーチャル名刺を作成しよう!
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
  position: relative;
  z-index: 0;
  &__image {
    position: relative;
    &::before {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: inherit;
      pointer-events: none;
      background-size: cover;
      z-index: -1;
      background-position: 50%;
    }
  }
  &__position {
    background: rgba(0, 0, 0, 0);
    flex: none;
    height: 584px;
    width: 1000px;
    max-width: 100%;
    z-index: -2;
    &::before {
      content: "";
      background-image: url("~assets/images/hero/hero.svg");
    }
  }
  &__textBox {
    position: absolute;
    top: 60px;
  }
  &__text {
    top: 0;
    flex: none;
    font-size: 88px;
    height: auto;
    line-height: 1.2;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    word-break: break-word;
    z-index: 0;
    &--emphasize {
      color: #9095ff;
      opacity: 0.7;
      background: -webkit-linear-gradient(90deg, #9095ff, #1382de 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &--sm {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
