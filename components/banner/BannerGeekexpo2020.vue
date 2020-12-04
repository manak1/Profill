<template>
  <Banner>
    <div class="relative text-center">
      <nuxt-link
        to="/events/geekexpo2020"
        class="mx-auto inline-block text-lg font-bold underline c-banner__title"
      >
        技育Expo専用ページはこちら
      </nuxt-link>
      <a class="c-button__delete" href="#" @click.prevent="$emit('close')">
        <img
          src="@/assets/images/banner/banner-delete.svg"
          alt="バナーを削除"
        />
      </a>
    </div>
  </Banner>
</template>

<script>
export default {
  components: {
    Banner: () => import("@/components/banner/Banner"),
  },
}
</script>

<style lang="scss" scoped>
.c-banner__title {
  color: #1bd95c;
}

.c-button__delete {
  position: absolute;
  top: 0;
  background-color: #7c7c7c;
  right: 5%;
}
</style>
