<template>
  <div>
    <slider-picker v-if="type === 'slide'" v-model="colors" @input="setColor" />
    <compact-picker
      v-if="type === 'compact'"
      v-model="colors"
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
    }
  },

  methods: {
    setColor() {
      this.$emit("setColor", this.colors.hex)
    },
  },
}
</script>

<style lang="scss" scoped></style>
