<template>
  <EventFormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-right mb-8">
          <select
            class="border border-gray-300 rounded-md text-gray-700 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option
              v-for="(selection, index) in selections"
              :key="index"
              :value="selection.text"
            >
              {{ selection.text }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <textarea
            id="hitokoto"
            placeholder="ラーメン二郎しか勝たん!!"
            class="autoexpand tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full bg-white border border-gray-400 rounded-md hover:border-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </template>
  </EventFormBody>
</template>

<script>
export default {
  data() {
    return {
      form: {
        selected: "",
        comment: "",
      },
      selections: [
        { text: "好きなラーメン店は?", isQuestion: true },
        { text: "推し言語(フレームワーク等)は?", isQuestion: true },
        { text: "今日の意気込みをどうぞ!", isQuestion: false },
      ],
    }
  },
}
</script>

<style scoped></style>
