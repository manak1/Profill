<template>
  <!-- 名刺デザイン16 -->
  <div class="absolute c-design w-full h-full">
    <div class="c-type5 w-full absolute" style="height: 90%;"></div>
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
.c-type5 {
  left: 0;
  background-image: url("~assets/images/templates/template2/bgObject5.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
