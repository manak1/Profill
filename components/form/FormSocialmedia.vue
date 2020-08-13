<template>
  <FormBody>
    <template v-slot:body>
      <div class="grid grid-cols-12 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="flex col-span-7 block tracking-wide text-gray-700 text-s font-bold mb-2"
          for="sns1"
        >
          <img
            class="w-6 h-6 mr-2 mt-3 rounded"
            src="@/assets/images/form/sns/twitter-color.svg"
            alt="twitter アイコン"
          />
          <span class="my-auto">
            https://www.twitter.com/
          </span>
        </label>
        <input
          id="sns1"
          v-model="$v.form.instagram.$model"
          class="col-span-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="@your account"
          @input="input"
        />
      </div>
      <div class="grid grid-cols-12 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="col-span-7 flex tracking-wide text-gray-700 text-s font-bold mb-2"
          for="sns2"
        >
          <img
            class="w-5 h-5 mr-2 mt-3 rounded"
            src="@/assets/images/form/sns/instagram-color.svg"
            alt="Instagramアイコン"
          />
          <span class="my-auto">
            https://www.instagram.com/
          </span>
        </label>
        <input
          id="sns2"
          v-model="$v.form.twitter.$model"
          class="col-span-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="your name"
          @input="input"
        />
      </div>
      <div class="grid grid-cols-12 w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="col-span-7 flex tracking-wide text-gray-700 text-s font-bold mb-2"
          for="sns3"
        >
          <img
            class="w-6 h-6 mr-2 mt-3 rounded"
            src="@/assets/images/form/sns/facebook-color.svg"
            alt="Facebook アイコン"
          />
          <span class="my-auto">
            https://www.facebook.com/
          </span>
        </label>
        <input
          id="sns3"
          v-model="$v.form.facebook.$model"
          class="col-span-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder=""
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
