<template>
  <div class="shadow-lg relative">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div class="w-2/5 sm:w-3/5 px-8 py-6" :style="ApplyColor">
        <div class="z-40 relative">
          <h2
            :class="{ 'c-hidden-3xl': !result.organization }"
            class="text-3xl font-semi-bold pb-2"
          >
            {{ result.organization }}
          </h2>
          <div :class="{ 'c-hidden-lg': !result.post_code }">
            〒 {{ result.post_code }}
          </div>
          <div :class="{ 'c-hidden-lg': !result.zip }" class="text-lg pb-2">
            {{ result.zip }}
          </div>
          <div :class="{ 'c-hidden-lg': !result.tel }" class="text-lg">
            {{ result.tel }}
          </div>
          <div :class="{ 'c-hidden-lg': !result.mail }" class="text-lg pb-16">
            {{ result.mail }}
          </div>
          <div
            :class="{ 'c-hidden-xl': !result.department }"
            class="text-xl font-bold pb-6"
          >
            {{ result.department }}
          </div>
          <div
            :class="{
              'c-hidden-lg': !result.first_name_kana && !result.last_name_kana,
            }"
            class="text-lg font-bold"
          >
            {{ result.first_name_kana }} {{ result.last_name_kana }}
          </div>
          <div
            :class="{ 'c-hidden-5xl': !result.first_name && !result.last_name }"
            class="pb-32 text-5xl font-bold"
          >
            {{ result.first_name }} {{ result.last_name }}
          </div>
        </div>
      </div>
      <div class="w-3/5 sm-2/5 relative">
        <div class="float-right mr-12" :style="ApplyColor">
          <div
            v-if="result.twitter"
            class="flex tracking-wide text-s font-bold mb-2"
          >
            <img
              class="w-8 h-8 mr-3 mt-3 rounded"
              src="@/assets/images/sns/twitter-color.svg"
              alt="Twitter アイコン"
            />
            <span class="my-auto pt-3">
              {{ result.twitter }}
            </span>
          </div>
          <div
            v-if="result.instagram"
            class="flex tracking-wide text-s font-bold mb-2"
          >
            <img
              class="w-8 h-8 mr-3 mt-3 rounded"
              src="@/assets/images/sns/instagram-color.svg"
              alt="Instagram アイコン"
            />
            <span class="my-auto pt-3">
              {{ result.instagram }}
            </span>
          </div>
          <div
            v-if="result.facebook"
            class="flex tracking-wide text-s font-bold mb-2"
          >
            <img
              class="w-8 h-8 mr-3 mt-3 rounded"
              src="@/assets/images/sns/facebook-color.svg"
              alt="Facebook アイコン"
            />
            <span class="my-auto pt-3">
              {{ result.facebook }}
            </span>
          </div>
        </div>
        <qrcode-vue
          v-if="result.weblink"
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
    type1: () => import(`@/components/templates/template2/designs/DesignType1`),
    type2: () => import(`@/components/templates/template2/designs/DesignType2`),
    type3: () => import(`@/components/templates/template2/designs/DesignType3`),
    type4: () => import(`@/components/templates/template2/designs/DesignType4`),
    type5: () => import(`@/components/templates/template2/designs/DesignType5`),
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
  right: 40px;
  bottom: 40px;
}
.c-hidden-5xl {
  visibility: hidden;
  height: 72px;
}
.c-hidden-3xl {
  visibility: hidden;
  height: 45px;
}
.c-hidden-xl {
  visibility: hidden;
  height: 30px;
}
.c-hidden-lg {
  visibility: hidden;
  height: 24px;
}
</style>
