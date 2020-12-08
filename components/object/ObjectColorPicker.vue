<template>
  <div v-if="type">
    <slider-picker v-if="type === 'slide'" v-model="colors" @input="setColor" />
    <compact-picker
      v-if="type === 'swatches'"
      v-model="colors"
      :palette="colorPalette"
      @input="setColor"
    />
  </div>
</template>

<script>
import { Slider, Compact } from "vue-color"
const colors = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
}
export default {
  components: {
    "slider-picker": Slider,
    "compact-picker": Compact,
  },
  props: {
    type: {
      type: String,
      default: "slide",
    },
  },
  data() {
    return {
      colors,
      colorPalette: [
        "#000000",
        "#0a0a0a",
        "#151515",
        "#1f1f1f",
        "#2a2a2a",
        "#353535",
        "#3f3f3f",
        "#4a4a4a",
        "#555",
        "#5f5f5f",
        "#6a6a6a",
        "#747474",
        "#8a8a8a",
        "#949494",
        "#9f9f9f",
        "#aaaaaa",
        "#bfbfbf",
        "#c9c9c9",
        "#d4d4d4",
        "#dfdfdf",
        "#e9e9e9",
        "#efefefef",
        "#f4f4f4",
        "#fff",
      ],
    }
  },

  methods: {
    setColor() {
      this.$emit("setColor", this.colors.hex)
    },
  },
}
</script>

<style>
.vc-slider {
  width: 100% !important;
  max-width: 410px;
  margin: 0 auto;
}

.vc-compact {
  width: 100% !important;
  max-width: 245px;
  margin: 0 auto;
}
</style>
