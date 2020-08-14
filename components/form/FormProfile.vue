<template>
  <FormBody>
    <template v-slot:body>
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
              placeholder="関学"
              @input="input"
            />
            <span
              v-if="$v.form.first_name.maxLength && $v.form.first_name.$dirty"
              class="text-red-600"
            >
              {{ messages.first_name.maxLength }}
            </span>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              v-model="$v.form.last_name.$model"
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="太郎"
              @input="input"
            />
            <span
              v-if="$v.form.last_name.maxLength && $v.form.last_name.$dirty"
              class="text-red-600"
            >
              {{ messages.last_name.maxLength }}
            </span>
          </div>
        </div>
      </div>
      <div class="w-full">
        <label
          class="uppercase tracking-wide text-gray-700 text-xs font-bold px-3 mb-2"
          for="name-kana"
        >
          ふりがな
        </label>
        <div class="flex">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              id="name-kana"
              v-model="$v.form.first_name_kana.$model"
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="かんがく"
              @input="input"
            />
            <span
              v-if="
                $v.form.first_name_kana.maxLength &&
                $v.form.first_name_kana.$dirty
              "
              class="text-red-600"
            >
              {{ messages.first_name_kana.maxLength }}
            </span>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              v-model="$v.form.last_name_kana.$model"
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="たろう"
              @input="input"
            />
            <span
              v-if="
                $v.form.last_name_kana.maxLength &&
                $v.form.last_name_kana.$dirty
              "
              class="text-red-600"
            >
              {{ messages.last_name_kana.maxLength }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </FormBody>
</template>

<script>
import formMixin from "./_formMixin"
import { validations, messages } from "@/service/validations/formProfile"

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
