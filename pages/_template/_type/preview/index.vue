<template>
  <section class="container py-8 px-4 mx-auto">
    <div v-if="componentData">
      <card-template :template="template" :type="type" />
      <!--    <component :is="componentData" /> -->
      <div
        class="lg:flex lg:justify-center lg:-space-x-8 items-center text-center"
      >
        <div class="mt-8 lg:mt-12 mx-auto w-full lg:w-1/2">
          <p class="font-bold">
            背景色
          </p>
          <object-color-picker class="mt-4" @setColor="setBackgroundColor" />
        </div>
        <div class="mt-8 lg:mt-12 mx-auto w-full lg:w-1/2">
          <p class="font-bold">
            文字色
          </p>
          <object-color-picker
            type="swatches"
            class="mt-4"
            @setColor="setTextColor"
          />
        </div>
      </div>
      <div class="mt-12 lg:mt-16">
        <label
          style="border-color: #474747;"
          for="imageInput"
          class="py-3 w-full border block text-center rounded cursor-pointer mx-auto lg:w-1/2"
        >
          <input id="imageInput" type="file" @change="uploadImage" />
          ファイルから色を選ぶ
        </label>
        <div class="mt-10 text-left">
          <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formMapper } from "@/store/form"

export default {
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
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
input[type="file"] {
  display: none;
}
</style>
