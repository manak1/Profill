<template>
  <div class="container text-center mx-auto mt-20">
    <img
      class="object-cover w-full h-full"
      src="@/assets/images/error/bgObject.svg"
      alt="404の枠"
    />
    <img
      class="absolute object-cover transform -translate-x-1/2 left-1/2 w-1/5 h-1/5 c-404_img"
      src="@/assets/images/error/404.svg"
      alt="404"
    />
    <p
      class="container text-center absolute object-cover transform -translate-x-1/2 left-1/2 w-full text-3xl font-bold top-1/2 c-404_text"
    >
      お探しのページは見つかりませんでした。
    </p>
    <button
      class="absolute transform -translate-x-1/2 c-home-btn rounded-lg border-2 hover:opacity-50 py-2 px-8"
    >
      <router-link to="/">
        ホームに戻る
      </router-link>
    </button>
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
</style>
