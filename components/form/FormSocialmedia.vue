<template>
  <FormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="sns1"
        >
          instagram
        </label>
        <input
          id="sns1"
          v-model="$v.form.instagram.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder=""
          @input="input"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="sns2"
        >
          twitter
        </label>
        <input
          id="sns2"
          v-model="$v.form.twitter.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder=""
          @input="input"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="sns3"
        >
          facebook
        </label>
        <input
          id="sns3"
          v-model="$v.form.facebook.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="90210"
          @input="input"
        />
      </div>
    </template>
  </FormBody>
</template>

<script>
import formMixin from "./_formMixin"
import { validations, messages } from "@/service/validations/formSocialmedia"
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
