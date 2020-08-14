<template>
  <div class="shadow-lg relative">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div class="w-2/5 px-8 py-6" :style="ApplyColor">
        <div class="z-40 relative">
          <h2 class="pb-32 text-4xl font-bold">
            {{ result.organization }}
          </h2>
          <div class="pb-32 text-3xl font-bold">
            {{ result.first_name }} {{ result.last_name }}
          </div>
          <div class="pb-2 text-2xl font-bold">
            {{ result.organization }}
          </div>
          <div>
            {{ result.zip }}
          </div>
          <div>
            {{ result.mail }}
          </div>
          <div>
            {{ result.tel }}
          </div>
        </div>
      </div>
      <div class="w-3/5 relative">
        <qrcode-vue
          class="c-qrCode"
          :value="result.weblink"
          :size="size"
          level="H"
        ></qrcode-vue>
      </div>
    </div>
    <component :is="type" :background-color="result.background_color" />
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
export default {
  components: {
    type1: () => import(`@/components/templates/template4/designs/DesignType1`),
    type2: () => import(`@/components/templates/template4/designs/DesignType2`),
    type3: () => import(`@/components/templates/template4/designs/DesignType3`),
    type4: () => import(`@/components/templates/template4/designs/DesignType4`),
    type5: () => import(`@/components/templates/template4/designs/DesignType5`),
    QrcodeVue: () => import("qrcode.vue"),
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      companyUrl: "https://chatbox-inc.com/",
      size: 150,
    }
  },
  computed: {
    ...formMapper.mapGetters(["result"]),
    ApplyColor() {
      return {
        "background-color": this.result.background_color,
        color: this.result.text_color,
      }
    },
  },
}
</script>

<style scoped>
.c-qrCode {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
