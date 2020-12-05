<template>
  <div class="w-full">
    <BannerGeekexpo2020 v-if="banner" @close="closeBanner" />
    <LayoutHeader :class="applyBannerHeight" />
    <div class="hidden lg:block" :class="applyFixedHeightPc" />
    <div class="lg:hidden" :class="applyFixedHeightSp" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: true,
      headerSize: {
        pc: 90,
        sp: 82,
      },
      bannerSize: {
        pc: 56,
        sp: 56,
      },
    }
  },
  computed: {
    applyFixedHeightPc() {
      return {
        "header-height-pc": !this.banner,
        "header-banner-height-pc": this.banner,
      }
    },
    applyFixedHeightSp() {
      return {
        "header-height-sp": !this.banner,
        "header-banner-height-sp": this.banner,
      }
    },
    applyBannerHeight() {
      return {
        "banner-height": this.banner,
      }
    },
  },
  methods: {
    closeBanner() {
      this.banner = false
    },
  },
}
</script>

<style scoped lang="scss">
$header-height-pc: 90px;
$header-height-sp: 82px;
$banner-height-pc: 56px;
$banner-height-sp: 56px;

.header-height-pc {
  padding-top: $header-height-pc;
}

.header-height-sp {
  padding-top: $header-height-sp;
}

.header-banner-height-pc {
  padding-top: $header-height-pc + $banner-height-pc;
}

.header-banner-height-sp {
  padding-top: $header-height-sp + $banner-height-sp;
}

.banner-height {
  padding-top: $banner-height-pc;
}
</style>
