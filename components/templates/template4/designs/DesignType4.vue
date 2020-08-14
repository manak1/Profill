<template>
  <!-- 名刺デザイン17 -->
  <div class="absolute c-design w-full h-full">
    <span class="square block"></span>
    <span class="square2 block"> </span>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
/* レスポンシブを考えると%指定が望ましい */
.c-design {
  top: 0;
}
.square {
  position: relative;
  top: 100px;
  width: 80%;
  height: 30%;
  background-color: #9ae6b4;
}
.square2 {
  position: relative;
  top: 140px;
  width: 60%;
  height: 10%;
  background-color: #9ae6b4;
}
</style>
