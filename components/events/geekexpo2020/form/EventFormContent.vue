<template>
  <EventFormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-right mb-8">
          <div class="c-form__select">
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
        </div>
        <div class="mb-3">
          <textarea
            id="hitokoto"
            v-model="$v.form.comment.$model"
            placeholder="今日一日よろしくお願いします！"
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
        { text: "意気込みをどうぞ!", state: "&#x1f606;" },
        { text: "研究内容は?", state: "&#x1f4da;" },
        { text: "マイブームは?", state: "&#x1f440;" },
        { text: "推し言語は?", state: "&#x1f4bb" },
      ],
      messages,
    }
  },
  validations,
}
</script>

<style lang="scss" scoped>
.c-form__select {
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    pointer-events: none;
    background-image: url("~assets/images/other/chevron.svg");
    background-size: cover;
  }
}
</style>
