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
      <input type="file" @change="uploadImage" />
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
    this.colorList = { ...this.colors }
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
    uploadImage(i) {
      let image = i.target.files[0]
      if (!image) {
        return
      }
      if (image.size > 10000000) {
        return
      }
      if (image.type !== "image/jpeg") {
        return
      }

      let reader = new FileReader()
      reader.onerror = () => alert("画像の読み取りに失敗しました")
      reader.onload = async () => {
        const base64 = reader.result.split(",")[1]
        const { data } = await this.$axios.post("/send", { image: base64 })
        // TODO fix
        this.colorList.background_color = data.colors[0]
        this.SET_COLORS(this.colorList)
      }
      reader.readAsDataURL(image)
    },
  },
}
</script>

<style scoped></style>
