<template>
  <section class="container py-8 px-4 mx-auto">
    <div v-if="componentData">
      <component :is="componentData" />
      <div class="mt-4">
        <slider-picker v-model="colors" @input="updateColor" />
      </div>
    </div>
  </section>
</template>

<script>
import { Slider } from "vue-color"
import { formMapper } from "@/store/form"
const colors = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
}
export default {
  components: {
    template1type1: () => import(`@/components/template/template1/type1`),
    "slider-picker": Slider,
  },
  data() {
    return {
      componentData: null,
      colors,
    }
  },
  computed: {
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    const template = templates.find((item) => item.name === this.template)
    const type = template.types.find((item) => item.name === this.type)
    this.componentData = `${template.name}${type.name}`
  },
  methods: {
    ...formMapper.mapMutations(["SET_COLORS"]),
    updateColor() {
      this.SET_COLORS({ main_color: this.colors.hex })
    },
  },
}
</script>

<style scoped></style>
