<template>
  <!-- 名刺デザイン5 -->
  <div style="z-index: -1;">
    <div
      class="c-arrow1 w-4 h-4 border-2 border-transparent absolute"
      :style="{ '--color': objectColor }"
    ></div>
    <div
      class="absolute border-b-2 border-black c-border1"
      :style="{ 'border-color': objectColor }"
      :backgroundColor="objectColor"
    ></div>
    <div
      class="c-arrow2 w-4 h-4 border-2 border-transparent absolute"
      :style="{ '--color': objectColor }"
    ></div>
    <div
      class="absolute w-2/3 border-b-2 border-black c-border2"
      :style="{ 'border-color': objectColor }"
      :backgroundColor="objectColor"
    ></div>
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
.c-border1 {
  top: 12%;
  width: 50%;
}
.c-border2 {
  top: 70%;
}
.c-arrow1 {
  --color: black;
  border-color: transparent transparent var(--color) var(--color);
  transform: rotate(-135deg);
  left: 48.3%;
  top: 10.8%;
}
.c-arrow2 {
  --color: black;
  border-color: transparent transparent var(--color) var(--color);
  transform: rotate(-135deg);
  left: 65%;
  top: 68.8%;
}
@media screen and (max-width: 1024px) {
  .c-arrow1 {
    left: 47.5%;
  }
  .c-arrow2 {
    top: 68.7%;
    left: 64%;
  }
}
</style>
