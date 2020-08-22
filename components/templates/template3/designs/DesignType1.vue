<template>
  <!-- 名刺デザイン10  -->
  <div class="absolute overflow-hidden c-design w-full h-full">
    <div class="square" :style="{ backgroundColor: objectColor }" />
    <div class="square2" :style="{ backgroundColor: objectColor }" />
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
  top: 50%;
  left: -30%;
  transform: rotate(-45deg) translate(-25%, -25%);
  width: 100%;
  height: 80%;
  background-color: #9ae6b4;
}
.square2 {
  position: relative;
  top: -145%;
  right: -55%;
  transform: rotate(-45deg);
  width: 100%;
  height: 90%;
  background-color: #555555;
}
</style>
