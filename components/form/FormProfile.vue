<template>
  <FormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="first-name"
        >
          名字
        </label>
        <input
          id="first-name"
          v-model="$v.form.first_name.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="関学"
          @input="input"
        />
        <!--        <p class="text-red-500 text-xs italic">-->
        <!--          Please fill out this field.-->
        <!--        </p>-->
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="last-name"
        >
          名前
        </label>
        <input
          id="last-name"
          v-model="$v.form.last_name.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="太郎"
          @input="input"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="first-name-kana"
        >
          名字(かな)
        </label>
        <input
          id="first-name-kana"
          v-model="$v.form.first_name_kana.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="かんがく"
          @input="input"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="last-name-kana"
        >
          名前(かな)
        </label>
        <input
          id="last-name-kana"
          v-model="$v.form.last_name_kana.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="たろう"
          @input="input"
        />
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
