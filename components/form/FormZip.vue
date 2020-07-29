<template>
  <FormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          住所
        </label>
        <input
          id="grid-zip"
          v-model="$v.form.post_code.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="90210"
          @input="input"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip2"
        >
          都道府県・市区町村・番地
        </label>
        <input
          id="grid-zip2"
          v-model="$v.form.zip.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="兵庫県西宮市上ケ原一番町"
          @input="input"
        />
      </div>
    </template>
  </FormBody>
</template>

<script>
import formMixin from "./_formMixin"
import { validations, messages } from "@/service/validations/formZip"

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
