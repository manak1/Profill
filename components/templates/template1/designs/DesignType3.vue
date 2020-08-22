<template>
  <!-- 名刺デザイン16 -->
  <div class="absolute c-design w-full h-full">
    <div class="c-type3 w-full h-full"></div>
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
  background-image: url("~assets/images/templates/template1/bgObject3.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 100%;
}
</style>
