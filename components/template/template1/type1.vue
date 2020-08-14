<template>
  <div class="shadow-lg">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div class="w-2/5 px-8 py-6" :style="ApplyColor">
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
      <div class="w-3/5 relative">
        <qrcode-vue
          class="c-qrCode"
          :value="result.weblink"
          :size="size"
          level="H"
        ></qrcode-vue>
      </div>
    </div>
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
import QrcodeVue from "qrcode.vue"
export default {
  components: {
    QrcodeVue,
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
