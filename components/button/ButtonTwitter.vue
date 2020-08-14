<template>
  <a
    href="https://twitter.com/intent/tweet?text=名刺を作ってみたよ!"
    class="py-2 pl-6 relative text-white text-center rounded-md c-button__twitter"
  >
    ツイート
  </a>
</template>

<script>
export default {}
</script>

<style scoped>
.c-button__twitter {
  width: 120px;
  background-color: #1da1f2;
}

.c-button__twitter:hover {
  background-color: #0c85d0;
}

.c-button__twitter::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 15px;
  background-image: url("~assets/images/button/twitter-white.svg");
  background-size: cover;
  height: 20px;
  width: 22px;
  display: inline-block;
}
</style>
