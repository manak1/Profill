<template>
  <EventFormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-right mb-8">
          <select
            v-model="$v.form.question.$model"
            class="border border-gray-300 rounded-md text-gray-700 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            @change="input"
          >
            <option
              v-for="(selection, index) in selections"
              :key="index"
              :value="selection"
            >
              {{ selection.text }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <textarea
            id="hitokoto"
            v-model="$v.form.comment.$model"
            placeholder="ラーメン二郎しか勝たん!!"
            class="autoexpand tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full bg-white border border-gray-400 rounded-md hover:border-gray-400 focus:outline-none"
            @input="input"
          />
        </div>
      </div>
    </template>
  </EventFormBody>
</template>

<script>
import formMixin from "./_formMixin"
import {
  validations,
  messages,
} from "@/service/validations/events/geekexpo2020/formContent"

export default {
  mixins: [formMixin],
  data() {
    return {
      selections: [
        { text: "好きなラーメン店は?", isQuestion: true },
        { text: "最近のマイブームは?", isQuestion: true },
        { text: "推し言語(フレームワーク等)は?", isQuestion: true },
        { text: "今日の意気込みをどうぞ!", isQuestion: false },
      ],
      messages,
    }
  },
  validations,
}
</script>

<style scoped></style>
