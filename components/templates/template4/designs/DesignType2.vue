<template>
  <!-- 名刺デザイン12 -->
  <div ref="cardDesign2" class="absolute c-design w-full h-full">
    <div
      class="flex space-x-3 lg:space-x-6 items-baseline absolute"
      style="bottom: 0; right: 2%;"
    >
      <div
        v-for="n in 4"
        :key="n"
        class="square relative"
        :style="{
          height: squareHeights[n - 1] + 'px',
          width: squareWidth[n - 1] + 'px',
          'background-color': objectColor,
        }"
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
      squareHeights: [],
      squareWidth: [],
    }
  },
  async mounted() {
    this.handleSquareSize()
    window.addEventListener("resize", this.handleSquareSize)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleSquareSize)
  },
  methods: {
    handleSquareSize() {
      const squareHeight = this.$refs.cardDesign2.offsetHeight / 3
      this.squareHeights = [
        squareHeight * 0.5,
        squareHeight * 1.4,
        squareHeight * 1.7,
        squareHeight * 0.8,
      ]
      const squareWidth = this.$refs.cardDesign2.offsetWidth / 28
      this.squareWidth = [
        squareWidth,
        squareWidth * 1.5,
        squareWidth * 1.8,
        squareWidth * 1.2,
      ]
    },
  },
}
</script>
<style lang="scss" scoped>
/* レスポンシブを考えると%指定が望ましい */
.c-design {
  top: 0;
}

.square {
  width: 13px;
  height: 13px;
  bottom: 0;
  &:nth-child(2) {
    width: 20px;
    height: 82px;
  }
  &:nth-child(3) {
    width: 22px;
    height: 112px;
  }
  &:nth-child(4) {
    width: 16px;
    height: 16px;
  }
}
</style>
