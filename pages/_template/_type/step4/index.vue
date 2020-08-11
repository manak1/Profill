<template>
  <PagesBody :title="'ダウンロード'">
    <template v-slot:body>
      <div class="text-center px-6 py-4">
        <div ref="printMe">
          <component :is="componentData" />
        </div>
        <h2>{{ componentData }}</h2>
        <a
          class="mx-auto w-1/2 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
          :href="output"
          download="output"
        >
          ダウンロード
        </a>
      </div>
      <div class="text-center mb-20">
        <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
      </div>
    </template>
  </PagesBody>
</template>
<script>
import { formMapper } from "@/store/form"

export default {
  components: {
    template1type1: () => import(`@/components/template/template1/type1`),
  },
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
  mounted() {
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

<style scoped></style>
