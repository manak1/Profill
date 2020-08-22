<template>
  <!-- 名刺デザイン4  -->
  <div class="absolute c-design w-full h-full">
    <span class="square-lg lg:block"></span>
    <span class="square2-lg lg:block"> </span>
    <span class="square-sm hidden sm:block lg:hidden"></span>
    <span class="square2-sm hidden sm:block lg:hidden"> </span>
    <span class="square block sm:hidden lg:hidden"></span>
    <span class="square2 block sm:hidden lg:hidden"> </span>
  </div>
</template>

<script>
export default {
  props: {
    objectColor: {
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
  top: 25%;
  width: 60%;
  height: 24%;
  background-color: #9ae6b4;
}

.square2 {
  position: relative;
  top: 26%;
  width: 80%;
  height: 14%;
  background-color: #9ae6b4;
}

.square-lg {
  position: relative;
  top: 15%;
  width: 80%;
  height: 30%;
  background-color: #9ae6b4;
}
.square2-lg {
  position: relative;
  top: 20%;
  width: 60%;
  height: 10%;
  background-color: #9ae6b4;
}

.square-sm {
  position: relative;
  top: 20%;
  width: 80%;
  height: 30%;
  background-color: #9ae6b4;
}

.square2-sm {
  position: relative;
  top: 22%;
  width: 60%;
  height: 10%;
  background-color: #9ae6b4;
}
</style>
