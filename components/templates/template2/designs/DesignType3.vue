<template>
  <!-- 名刺デザイン7 -->
  <div>
    <div
      class="absolute h-40 c-design c-border1 w-full border-t-8 border-black"
      :style="{ 'border-top-color': backgroundColor }"
    ></div>
    <div
      class="absolute h-32 c-design c-border2 w-full border-t-4 border-black"
      :style="{ 'border-top-color': backgroundColor }"
    ></div>
    <div
      class="absolute w-3/4 c-design h-full border-r-2 border-white left-4"
      :style="{ 'border-right-color': backgroundColor }"
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
  z-index: -1;
  bottom: 0;
}
.c-border1 {
}
.c-border2 {
  bottom: 12px;
}
</style>
