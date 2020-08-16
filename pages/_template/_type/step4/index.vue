<template>
  <PagesBody :title="'ダウンロード'">
    <template v-slot:body>
      <div class="mx-auto mb-4 px-6 py-4">
        <div ref="printMe">
          <card-template :type="type" :template="template" />
        </div>
      </div>
      <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
      <div class="text-center mt-24">
        <a
          class="inline-flex items-center justify-center w-1/2 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
          :href="output"
          download="output"
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
      output: null,
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
  async mounted() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    this.print()
  },
  methods: {
    linkToPrev() {
      this.$router.go(-1)
    },
    async print() {
      const el = this.$refs.printMe
      const options = {
        type: "dataURL",
      }
      this.output = await this.$html2canvas(el, options)
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
