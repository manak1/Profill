<template>
  <div v-if="form">
    <EventFormBody>
      <template v-slot:body>
        <div
          class="flex justify-center items-center w-full md:w-1/2 px-3 mb-6 md:mb-0"
        >
          <img
            src="@/assets/images/sns/twitter-color.svg"
            alt="twitter アイコン"
            class="c-icon"
          />
          <input
            id="sns1"
            v-model="$v.form.twitter.$model"
            class="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 ml-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="@your account"
            @input="input"
          />
        </div>
        <div
          class="flex justify-center items-center w-full md:w-1/2 px-3 mb-6 md:mb-0"
        >
          <img
            src="@/assets/images/sns/github-color.svg"
            alt="github アイコン"
            class="c-icon"
          />
          <input
            id="sns2"
            v-model="$v.form.github.$model"
            class="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 ml-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="your name"
            @input="input"
          />
        </div>
      </template>
    </EventFormBody>
  </div>
</template>

<script>
import formMixin from "./_formMixin"
import {
  validations,
  messages,
} from "@/service/validations/events/geekexpo2020/formLink"

export default {
  mixins: [formMixin],
  data() {
    return {
      messages,
    }
  },
  validations,
}
</script>

<style scoped>
.c-icon {
  width: 30px;
  height: 30px;
}
</style>
