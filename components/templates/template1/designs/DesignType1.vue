<template>
  <!-- 名刺デザイン1  -->
  <div
    ref="cardDesign1"
    class="absolute c-design w-full h-full overflow-hidden"
  >
    <div class="flex absolute" style="bottom: 0; z-index: -1;">
      <div
        v-for="n in 10"
        :key="n"
        class="c-triangle c-triangle"
        :style="borderClass"
      ></div>
    </div>
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
        "border-color": `transparent transparent ${this.objectColor} transparent`,
        "border-width": `0 ${this.triangleWidth}px ${this.triangleHeight}px ${this.triangleWidth}px`,
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
      const triangleFullWidth = this.$refs.cardDesign1.offsetWidth / 10
      this.triangleWidth = triangleFullWidth / 2
      this.triangleHeight = this.$refs.cardDesign1.offsetHeight / 8
    },
  },
}
</script>

<style scoped>
.c-design {
  top: 0;
}
.c-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 65px 50px;
  border-color: transparent transparent #007bff transparent;
}
</style>
