<template>
  <div class="container text-center mx-auto mt-20">
    <img
      class="absolute object-cover transform -translate-x-1/2 left-1/2 w-1/5 h-1/5 c-404_img"
      src="@/assets/images/error/404.svg"
      alt="404"
    />
    <p
      class="container text-center absolute object-cover transform -translate-x-1/2 left-1/2 w-full lg:text-3xl sm:text-2xl text-lg font-bold top-1/2 c-404_text"
    >
      お探しのページは見つかりませんでした。
    </p>
    <nuxt-link
      class="inline-block absolute transform -translate-x-1/2 c-home-btn rounded-lg border-2 hover:opacity-50 sm:py-2 sm:px-8 py-2 px-4"
      to="/"
    >
      ホームに戻る
    </nuxt-link>
  </div>
</template>
<style scoped>
.c-404_img {
  top: 33%;
}
.c-404_text {
  color: #9095ff;
}
.c-home-btn {
  color: #9095ff;
  border-color: #9095ff;
  top: 62%;
}
@media screen and (max-width: 1024px) {
  .c-404_img {
    top: 20%;
  }
  .c-404_text {
    top: 33%;
  }
  .c-home-btn {
    top: 45%;
  }
}
@media screen and (max-width: 640px) {
  .c-404_img {
    top: 23%;
  }
  .c-404_text {
    top: 30%;
  }
  .c-home-btn {
    top: 38%;
  }
}
</style>
