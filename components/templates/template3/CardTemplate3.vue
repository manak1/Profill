<template>
  <div class="shadow-lg relative">
    <div class="flex">
      <div class="aspect-ratio-16/9" />
      <div class="w-2/5 px-8 py-6" :style="ApplyColor">
        <div class="z-40 h-full relative">
          <div class="absolute w-full" style="bottom: 0; height: 50%;">
            <div>
              <div>
                {{ result.department }}
              </div>
              <div>
                {{ result.first_name_kana }} {{ result.last_name_kana }}
              </div>
              <div class="text-4xl font-bold">
                {{ result.first_name }} {{ result.last_name }}
              </div>
            </div>
            <div>
              <div class="flex tracking-wide text-s font-bold mb-2">
                <img
                  class="w-8 h-8 mr-3 mt-3 rounded"
                  src="@/assets/images/form/sns/twitter-color.svg"
                  alt="Twitter アイコン"
                />
                <span class="my-auto pt-3">
                  {{ result.twitter }}
                </span>
              </div>
              <div class="flex tracking-wide text-s font-bold mb-2">
                <img
                  class="w-8 h-8 mr-3 mt-3 rounded"
                  src="@/assets/images/form/sns/instagram-color.svg"
                  alt="Instagram アイコン"
                />
                <span class="my-auto pt-3">
                  {{ result.instagram }}
                </span>
              </div>
              <div class="flex tracking-wide text-s font-bold mb-2">
                <img
                  class="w-8 h-8 mr-3 mt-3 rounded"
                  src="@/assets/images/form/sns/facebook-color.svg"
                  alt="Facebook アイコン"
                />
                <span class="my-auto pt-3">
                  {{ result.facebook }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/5 px-8 py-6" :style="ApplyColor">
        <div class="z-40 h-full relative">
          <div class="flex flex-col items-end">
            <div class="w-1/2">
              <div class="text-left">
                <h2 class="text-2xl font-bold mb-2">
                  {{ result.organization }}
                </h2>
                <div class="mb-3">
                  <div class="text-sm">〒{{ result.post_code }}</div>
                  <div>
                    {{ result.zip }}
                  </div>
                </div>
                <div class="mb-3">
                  <div>
                    {{ result.mail }}
                  </div>
                  <div>
                    {{ result.tel }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <qrcode-vue
            class="c-qrCode"
            :value="result.weblink"
            :size="size"
            level="H"
          ></qrcode-vue>
        </div>
      </div>
    </div>
    <component :is="type" :background-color="result.background_color" />
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
export default {
  components: {
    type1: () => import(`@/components/templates/template3/designs/DesignType1`),
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
        color: this.result.text_color,
      }
    },
  },
}
</script>

<style scoped>
.c-qrCode {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
