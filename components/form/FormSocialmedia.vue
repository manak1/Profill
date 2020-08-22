<template>
  <FormBody>
    <template v-slot:body>
      <div
        class="flex justify-center items-center w-full md:w-1/2 px-3 mb-6 md:mb-0"
      >
        <img
          src="@/assets/images/sns/twitter-color.svg"
          alt="twitter アイコン"
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
          src="@/assets/images/sns/instagram-color.svg"
          alt="Instagramアイコン"
        />
        <input
          id="sns2"
          v-model="$v.form.instagram.$model"
          class="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 ml-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="your name"
          @input="input"
        />
      </div>
      <div
        class="flex justify-center items-center w-full md:w-1/2 px-3 mb-6 md:mb-0"
      >
        <img
          src="@/assets/images/sns/facebook-color.svg"
          alt="Facebook アイコン"
        />
        <input
          id="sns3"
          v-model="$v.form.facebook.$model"
          class="col-span-5 appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 ml-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="your page"
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
