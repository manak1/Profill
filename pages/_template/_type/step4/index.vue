<template>
  <PagesBody :title="'ダウンロード'">
    <template v-slot:body>
      <div class="mx-auto mb-4 px-6 py-4">
        <div ref="printMe">
          <card-template :type="type" :template="template" />
        </div>
      </div>
      <nuxt-link
        :to="`/${template}/${type}/step3`"
        class="hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
      >
        戻る
      </nuxt-link>
      <div class="text-center mt-24">
        <a
          class="inline-flex items-center justify-center w-1/2 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
          @click.prevent="print"
        >
          <i class="c-icon__download inline-block" />
          <span class="pl-1">ダウンロード</span>
        </a>
      </div>
      <div class="flex space-x-3 justify-center mt-20">
        <button-twitter />
        <button-facebook />
      </div>
    </template>
  </PagesBody>
</template>
<script>
import { formMapper } from "@/store/form"

export default {
  asyncData({ params }) {
    const { templates } = require("@/static/data/templates.json")
    const template = templates.find((item) => item.name === params.template)
    const type = template.types.find((item) => item.name === params.type)
    const componentData = `${template.name}${type.name}`
    return {
      componentData,
    }
  },
  data() {
    return {
      componentData: null,
    }
  },
  computed: {
    ...formMapper.mapGetters(["result"]),
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    ...formMapper.mapActions(["clearInput"]),
    async print() {
      const el = this.$refs.printMe
      const options = {
        type: "dataURL",
      }
      const imgUrl = await this.$html2canvas(el, options)
      let anchor = document.createElement("a")
      anchor.href = imgUrl
      anchor.download = "output.png"
      anchor.click()
      // this.clearInput()
    },
  },
}
</script>

<style scoped>
.c-icon__download {
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("~assets/images/other/download-icon.svg");
}
</style>
