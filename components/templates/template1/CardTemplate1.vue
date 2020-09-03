<template>
  <div class="shadow-lg relative">
    <div
      v-if="ImageMaskSrc"
      :style="ImageSrc"
      class="c-bgimg w-full h-full absolute"
    >
      <img :src="ImageMaskSrc" class="block w-full h-full opacity-50" />
    </div>
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div
        class="flex justify-center w-full absolute space-x-3 mr-12"
        :style="ApplyColor"
        style="left: 50%; transform: translateX(-50%); top: 10px;"
      >
        <div
          v-if="result.twitter"
          class="flex items-center tracking-wide text-s font-bold"
        >
          <img
            class="w-5 h-8 lg:w-8 w-5 h-8 lg:h-8 mr-1 rounded"
            src="@/assets/images/sns/twitter-color.svg"
            alt="Twitter アイコン"
          />
          <span class="text-xxs sm:text-xs lg:text-base">
            {{ result.twitter }}
          </span>
        </div>
        <div
          v-if="result.instagram"
          class="flex items-center tracking-wide text-s font-bold"
        >
          <img
            src="@/assets/images/sns/instagram-color.svg"
            alt="Instagram アイコン"
            class="mr-1 rounded w-4 h-4 lg:w-6 lg:h-6"
          />
          <span class="text-xxs sm:xs lg:text-base">
            {{ result.instagram }}
          </span>
        </div>
        <div
          v-if="result.facebook"
          class="flex items-center tracking-wide text-s font-bold"
        >
          <img
            class="w-5 h-8 lg:w-8 w-5 h-8 lg:h-8 mr-1 rounded"
            src="@/assets/images/sns/facebook-color.svg"
            alt="Facebook アイコン"
          />
          <span class="text-xxs sm:text-xs lg:text-base">
            {{ result.facebook }}
          </span>
        </div>
      </div>
      <div class="w-3/5 relative">
        <qrcode-vue
          v-if="result.weblink"
          class="c-qrCode sm:hidden lg:hidden p-1 bg-white"
          :value="result.weblink"
          :size="size / 2"
          foreground="#474747"
          level="H"
        ></qrcode-vue>
        <qrcode-vue
          v-if="result.weblink"
          class="c-qrCode hidden sm:block lg:hidden p-1 bg-white"
          :value="result.weblink"
          :size="size / 1.5"
          foreground="#474747"
          level="H"
        ></qrcode-vue>
        <qrcode-vue
          v-if="result.weblink"
          class="c-qrCode hidden lg:block p-1 bg-white"
          :value="result.weblink"
          :size="size"
          foreground="#474747"
          level="H"
        ></qrcode-vue>
      </div>
      <div class="w-2/5 px-8 py-6" :style="ApplyColor">
        <div class="z-40 absolute" style="bottom: 15%; right: 5%;">
          <div
            v-if="result.department"
            class="text-xxs sm:text-base lg:text-xl font-bold"
          >
            {{ result.department }}
          </div>
          <div
            class="text-xxs sm:text-sm lg:text-lg font-bold sm:mt-3 lg:mt-6 -mb-1 lg:-mb-2"
          >
            {{ result.first_name_kana }} {{ result.last_name_kana }}
          </div>
          <div class="text-xs sm:text-3xl lg:text-5xl font-bold">
            {{ result.first_name }} {{ result.last_name }}
          </div>
          <h2
            class="text-xxs sm:text-xl sm:mt-3 lg:text-4xl font-bold lg:mt-10"
          >
            {{ result.organization }}
          </h2>
          <div v-if="result.post_code" class="text-xxs sm:text-base">
            〒{{ result.post_code }}
          </div>
          <div v-if="result.zip" class="text-xxs sm:text-base lg:text-lg">
            {{ result.zip }}
          </div>
          <div v-if="result.tel" class="text-xxs sm:text-base lg:text-lg mt-1">
            {{ result.tel }}
          </div>
          <div v-if="result.mail" class="text-xxs sm:text-base lg:text-lg">
            {{ result.mail }}
          </div>
        </div>
      </div>
    </div>
    <component :is="type" :object-color="color.object_color" />
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
import { colorMapper } from "@/store/color"
import { imageMapper } from "@/store/image"

export default {
  components: {
    type1: () => import(`@/components/templates/template1/designs/DesignType1`),
    type2: () => import(`@/components/templates/template1/designs/DesignType2`),
    type3: () => import(`@/components/templates/template1/designs/DesignType3`),
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
      size: 125,
    }
  },
  computed: {
    ...formMapper.mapGetters(["result"]),
    ...colorMapper.mapGetters(["color"]),
    ...imageMapper.mapGetters(["image"]),
    ApplyColor() {
      return {
        color: this.color.text_color,
      }
    },
    ImageSrc() {
      if (this.image.url) {
        return {
          "background-color": this.image.opacity,
          "z-index": -1,
        }
      }
      return {}
    },
    ImageMaskSrc() {
      return this.image.url
    },
  },
}
</script>

<style scoped>
.c-qrCode {
  position: absolute;
  left: 5%;
  bottom: 15%;
}
</style>
