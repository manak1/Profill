<template>
  <!-- 名刺デザイン8 -->
  <div>
    <div id="maxWidth" class="absolute h-20 c-design w-full"></div>
    <div class="absolute flex c-design">
      <div
        v-for="n in 10"
        :key="n"
        class="c-triangle"
        :style="borderClass"
      ></div>
    </div>
    <div
      class="absolute c-design w-full opacity-25"
      :style="backgroundClass"
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
  data() {
    return {
      triangleWidth: 0,
    }
  },
  computed: {
    backgroundClass() {
      return {
        "background-color": `${this.objectColor}`,
        height: `${this.triangleWidth + 20}px`,
      }
    },
    borderClass() {
      return {
        "border-right": `${this.triangleWidth}px solid transparent`,
        "border-left": `${this.triangleWidth}px solid transparent`,
        "border-top": `${this.triangleWidth + 20}px solid ${this.objectColor}`,
      }
    },
  },
  mounted() {
    this.triangleWidth = document.getElementById("maxWidth").clientWidth / 20
  },
}
</script>
<style scoped>
/* レスポンシブを考えると%指定が望ましい */
.c-design {
  bottom: 0;
  z-index: -1;
}
.c-triangle {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;

  border-top: 40px solid #f00;
}
</style>
