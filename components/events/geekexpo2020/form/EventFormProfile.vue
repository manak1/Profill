<template>
  <EventFormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="university"
        >
          大学名
        </label>
        <input
          id="university"
          v-model="$v.form.college.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="技育EXPO大学"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['college'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
      <div class="w-full">
        <label
          class="uppercase tracking-wide text-gray-700 text-xs font-bold px-3 mb-2"
          for="name"
        >
          お名前
        </label>
        <div class="flex">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              id="name"
              v-model="$v.form.first_name.$model"
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="山田"
              @input="input"
            />
            <div
              v-for="(message, index) in getMessages(['first_name'])"
              :key="index"
              class="text-indigo-500"
            >
              {{ message }}
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              v-model="$v.form.last_name.$model"
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="太郎"
              @input="input"
            />
            <div
              v-for="(message, index) in getMessages(['last_name'])"
              :key="index"
              class="text-indigo-500"
            >
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </EventFormBody>
</template>

<script>
import {
  validations,
  messages,
} from "@/service/validations/events/geekexpo2020/formProfile"
import formMixin from "./_formMixin"
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

<style scoped></style>
