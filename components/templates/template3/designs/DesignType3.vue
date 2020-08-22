<template>
  <!-- 名刺デザイン16 -->
  <div class="absolute c-design w-full h-full">
    <div class="c-type3 w-1/2 relative absolute" style="height: 50%;"></div>
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
  left: -6%;
  background-image: url("~assets/images/templates/template3/bgObject3.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 100%;
}
</style>
