<template>
  <!-- 名刺デザイン16 -->
  <div class="absolute c-design w-full h-full">
    <div class="c-type3 w-full h-full relative"></div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
/* レスポンシブを考えると%指定が望ましい */
.c-design {
  top: 0;
}
.c-type3 {
  z-index: -10;
  background-image: url("~assets/images/templates/template4/bgObject3.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: top;
}
</style>
