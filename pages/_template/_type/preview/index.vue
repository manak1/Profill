<template>
  <section class="container py-8 px-4 mx-auto">
    <div v-if="componentData">
      <component :is="componentData" />
      <div class="mt-4">
        <p>背景色の設定</p>
        <object-color-picker class="mt-2" @setColor="setBackgroundColor" />
      </div>
      <div class="mt-8">
        <p>文字色の設定</p>
        <object-color-picker type="compact" @setColor="setTextColor" />
      </div>
    </div>
  </section>
</template>

<script>
import { formMapper } from "@/store/form"
export default {
  components: {
    template1type1: () => import(`@/components/template/template1/type1`),
  },
  data() {
    return {
      componentData: null,
      colorList: null,
    }
  },
  computed: {
    ...formMapper.mapState(["colors"]),
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
    this.colorList = { ...this.colorList }
  },
  methods: {
    ...formMapper.mapMutations(["SET_COLORS"]),
    setTextColor(textColor) {
      this.colorList.text_color = textColor
      this.SET_COLORS(this.colorList)
    },
    setBackgroundColor(backgroundColor) {
      this.colorList.background_color = backgroundColor
      this.SET_COLORS(this.colorList)
    },
  },
}
</script>

<style scoped></style>
