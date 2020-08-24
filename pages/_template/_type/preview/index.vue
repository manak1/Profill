<template>
  <section class="container py-8 px-4 mx-auto">
    <div v-if="componentData">
      <card-template :template="template" :type="type" />
      <div
        class="lg:flex lg:justify-center lg:-space-x-8 items-center text-center"
      >
        <div v-if="isCustom" class="mt-8 lg:mt-12 mx-auto w-full lg:w-1/2">
          <p class="font-bold">
            デザイン色
          </p>
          <object-color-picker class="mt-4" @setColor="setDesignColor" />
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
          for="imageInput"
          class="py-3 w-full text-gray-800 border border-gray-400 block text-center rounded cursor-pointer mx-auto lg:w-1/2"
        >
          <input id="imageInput" type="file" @change="uploadImage" />
          背景画像を選択する
        </label>
        <div class="mt-10 text-left">
          <a
            href="#"
            class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
            @click.prevent="$router.go(-1)"
          >
            戻る
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { colorMapper } from "@/store/color"

export default {
  data() {
    return {
      componentData: null,
      colorList: null,
      isCustom: null,
    }
  },
  computed: {
    ...colorMapper.mapGetters(["color"]),
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
    this.isCustom = type.custom
    this.componentData = `${template.name}${type.name}`
    this.colorList = { ...this.colors }
  },
  methods: {
    ...colorMapper.mapMutations(["SET_COLORS"]),
    setTextColor(color) {
      this.colorList.text_color = color
      this.SET_COLORS(this.colorList)
    },
    setDesignColor(color) {
      this.colorList.object_color = color
      this.SET_COLORS(this.colorList)
    },
    uploadImage(i) {
      let image = i.target.files[0]
      //imageがなかったら
      if (!image) {
        return
      }
      // サイズが大きすぎたら
      if (image.size > 10000000) {
        return
      }
      //jpeg,pngじゃなかったら
      if (image.type !== "image/jpeg" || image.type !== "image/png") {
        return
      }

      let reader = new FileReader()
      reader.onerror = () => alert("画像の読み取りに失敗しました")
      reader.onload = async () => {
        const base64 = reader.result.split(",")[1]
        this.$loader.on()
        //ここで背景に適用できれば良い

        this.$loader.off()
        return base64
      }
      reader.readAsDataURL(image)
    },
  },
}
</script>

<style scoped>
input[type="file"] {
  display: none;
}
</style>
