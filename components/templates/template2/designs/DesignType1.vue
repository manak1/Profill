<template>
  <div>
    <!-- 名刺デザイン3  -->
    <div
      class="absolute c-design w-1/2 h-full opacity-25"
      :style="{ backgroundColor: objectColor }"
    ></div>
    <div
      class="absolute c-design w-1/8 h-full c-square2"
      :style="{ backgroundColor: objectColor }"
    ></div>
    <div
      class="absolute c-design w-1/3 h-full opacity-75"
      :style="{ backgroundColor: objectColor }"
    ></div>
    <div class="absolute w-1/2 h-24 c-line1 border-t-4 border-white"></div>
    <div
      class="absolute w-5/12 c-design h-full c-line2 border-r-4 border-white left-4"
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
.c-design {
  top: 0;
  z-index: -1;
}

.c-square2 {
  left: 33.3333%;
}

.c-line1 {
  bottom: 0;
}
.c-line2 {
  left: 0.8rem;
}
</style>
