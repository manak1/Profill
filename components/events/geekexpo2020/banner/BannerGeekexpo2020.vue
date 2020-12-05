<template>
  <div class="w-full fixed c-banner py-2 px-5 lg:px-6">
    <div class="relative text-center">
      <nuxt-link
        to="/events/geekexpo2020"
        class="mx-auto inline-block text-lg font-bold underline c-banner__title"
      >
        技育EXPO専用ページはこちら
      </nuxt-link>
      <a
        class="c-button__delete bg-gray-700"
        href="#"
        @click.prevent="$emit('close')"
      >
        <i class="c-icon__delete" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-banner {
  border: 6px solid #73e889;
  z-index: 100;
}
.c-banner__title {
  color: #73e889;
}
.c-button__delete {
  position: absolute;
  top: 0;
  right: 0;
  width: 27px;
  height: 27px;
}
.c-icon__delete::before {
  content: "";
  display: inline-block;
  background-image: url("~assets/images/other/delete.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
