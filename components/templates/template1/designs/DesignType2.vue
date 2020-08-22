<template>
  <!-- 名刺デザイン1  -->
  <div
    ref="cardDesign1"
    class="absolute c-design w-full h-full overflow-hidden"
  >
    <div class="flex absolute" style="bottom: 0; z-index: -1;">
      <div class="c-triangle c-triangle" :style="borderClass"></div>
    </div>
    <div class="c-line w-full relative" :style="lineClass" />
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
      triangleWidth: "50px",
      triangleHeght: "50px",
    }
  },
  computed: {
    borderClass() {
      return {
        "border-color": `transparent transparent transparent ${this.objectColor}`,
        "border-width": `${this.triangleWidth}px 0 0 ${this.triangleWidth}px`,
      }
    },

    lineClass() {
      return {
        "background-color": this.objectColor,
      }
    },
  },
  async mounted() {
    this.handleBorderSize()
    window.addEventListener("resize", this.handleBorderSize)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleBorderSize)
  },
  methods: {
    handleBorderSize() {
      const triangleFullWidth = this.$refs.cardDesign1.offsetWidth / 2
      this.triangleWidth = triangleFullWidth / 1.5
      this.triangleHeight = this.$refs.cardDesign1.offsetHeight / 2
    },
  },
}
</script>

<style lang="scss" scoped>
.c-design {
  top: 0;
}
.c-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 0 50px;
  border-color: transparent transparent #007bff transparent;
}

.c-line {
  width: 100%;
  height: 1px;
  transform: rotate(45deg);
  transform-origin: -15% -15% 0;
  z-index: -10;
}
</style>
