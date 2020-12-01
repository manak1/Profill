<template>
  <div class="shadow-lg relative">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div
        class="flex flex-col justify-evenly text-black color-black relative z-10 pt-3 px-5 pb-12"
      >
        <div class="text-black color-black">
          <h2 class="text-black text-lg lg:text-3xl">
            関西学院大学
          </h2>
          <p class="text-black text-2xl lg:text-4xl font-bold lg:mt-1">
            近藤 千沙
          </p>
        </div>
        <div class="mt-5">
          <p class="lg:text-lg">
            <span style="color: #4299e1;">Q</span>.貴方の最近の流行は?
          </p>
          <p
            class="mt-1 p-5 rounded-md lg:text-lg"
            style="background-color: #eeeeee;"
          >
            ラーメン次郎しか勝たん！
          </p>
        </div>
        <div class="space-y-1 mt-5 lg:space-y-2">
          <div class="flex items-center">
            <img
              class="w-4 lg:w-8"
              src="@/assets/images/sns/twitter-color.svg"
              alt="ツイッタ―はこちら"
            />
            <p class="ml-2 text-sm lg:text-lg">
              @chisakondo
            </p>
          </div>

          <div class="flex items-center">
            <img
              class="w-4 lg:w-8"
              src="@/assets/images/sns/github-color.svg"
              alt="Githubはこちら"
            />
            <p class="ml-2 text-sm lg:text-lg">
              @chisakondo
            </p>
          </div>
        </div>
      </div>
      <component :is="`geekexpo2020`" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    geekexpo2020: () =>
      import(
        `@/components/events/geekexpo2020/templates/designs/EventDesignType1`
      ),
  },
  computed: {},
}
</script>

<style scoped></style>
