<template>
  <div class="shadow-lg relative">
    <div class="flex flex-inline">
      <div class="aspect-ratio-16/9" />
      <div
        class="flex flex-col justify-evenly text-black color-black relative z-10 pt-3 px-5 pb-12"
      >
        <div class="text-black color-black">
          <h2 class="text-black text-lg lg:text-3xl">
            {{ result.college }}
          </h2>
          <p class="text-black text-2xl lg:text-4xl font-bold lg:mt-1">
            {{ result.last_name }} {{ result.first_name }}
          </p>
        </div>
        <div class="mt-5">
          <p class="lg:text-lg">
            <span v-if="result.question.isQuestion" style="color: #4299e1;">
              Q
            </span>
            {{ result.question.text }}
          </p>
          <p
            class="text-center text-gray-600 mt-1 p-5 rounded-md lg:text-lg"
            style="background-color: #eeeeee;"
          >
            {{ result.comment }}
          </p>
        </div>
        <div class="space-y-1 mt-5 lg:space-y-2">
          <div class="flex items-center">
            <img
              class="w-4 lg:w-8"
              src="@/assets/images/sns/twitter-color.svg"
              alt="ツイッタ―はこちら"
            />
            <p class="ml-2 text-gray-600 text-sm lg:text-lg">
              {{ result.twitter }}
            </p>
          </div>

          <div class="flex items-center">
            <img
              class="w-4 lg:w-8"
              src="@/assets/images/sns/github-color.svg"
              alt="Githubはこちら"
            />
            <p class="ml-2 text-gray-600 text-sm lg:text-lg">
              {{ result.github }}
            </p>
          </div>
        </div>
      </div>
      <component :is="`geekexpo2020`" />
    </div>
  </div>
</template>

<script>
import { geekexpoMapper } from "@/store/events/geekexpo2020/form"

export default {
  components: {
    geekexpo2020: () =>
      import(
        `@/components/events/geekexpo2020/templates/designs/EventDesignType1`
      ),
  },
  computed: {
    ...geekexpoMapper.mapGetters(["result"]),
  },
}
</script>

<style scoped></style>
