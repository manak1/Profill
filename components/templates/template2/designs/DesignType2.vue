<template>
  <!-- 名刺デザイン5 -->
  <div>
    <div
      class="c-arrow1 w-4 h-4 border-2 border-transparent absolute"
      :style="{ '--color': backgroundColor }"
    ></div>
    <div
      class="absolute w-2/3 border-b-2 border-black c-border1"
      :style="{ 'border-color': backgroundColor }"
      :backgroundColor="backgroundColor"
    ></div>
    <div
      class="c-arrow2 w-4 h-4 border-2 border-transparent absolute"
      :style="{ '--color': backgroundColor }"
    ></div>
    <div
      class="absolute w-2/3 border-b-2 border-black c-border2"
      :style="{ 'border-color': backgroundColor }"
      :backgroundColor="backgroundColor"
    ></div>
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
  z-index: -1;
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
.c-border1 {
  top: 12%;
}
.c-border2 {
  top: 62%;
}
.c-arrow1 {
  --color: black;
  border-color: transparent transparent var(--color) var(--color);
  transform: rotate(-135deg);
  left: 65%;
  top: 11%;
}
.c-arrow2 {
  --color: black;
  border-color: transparent transparent var(--color) var(--color);
  transform: rotate(-135deg);
  left: 65%;
  top: 61%;
}
</style>
