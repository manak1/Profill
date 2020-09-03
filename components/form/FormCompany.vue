<template>
  <FormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          組織名
        </label>
        <input
          id="grid-password"
          v-model="$v.form.organization.$model"
          :class="classNames('c-input', ['organization'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="株式会社Profill"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['organization'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          役職名
        </label>
        <input
          id="grid-city"
          v-model="$v.form.department.$model"
          :class="classNames('c-input', ['department'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="エンジニア・デザイナー"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['department'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          郵便番号
        </label>
        <input
          id="grid-zip"
          v-model="$v.form.post_code.$model"
          :class="classNames('c-input', ['post_code'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="012-3456"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['post_code'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
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
          :class="classNames('c-input', ['zip'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="東京都葛飾区亀有公園前派出所"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['post_code'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="email"
        >
          メールアドレス
        </label>
        <input
          id="email"
          v-model="$v.form.mail.$model"
          :class="classNames('c-input', ['mail'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="email"
          placeholder="example@gmail.com"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['mail'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="tel"
        >
          電話番号
        </label>
        <input
          id="tel"
          v-model="$v.form.tel.$model"
          :class="classNames('c-input', ['tel'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="01-234-5678"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['tel'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="weblink"
        >
          WEBサイト
        </label>
        <input
          id="weblink"
          v-model="$v.form.weblink.$model"
          :class="classNames('c-input', ['weblink'])"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="https://example.com"
          @input="input"
        />
        <div
          v-for="(message, index) in getMessages(['weblink'])"
          :key="index"
          class="text-indigo-500"
        >
          {{ message }}
        </div>
      </div>
    </template>
  </FormBody>
</template>

<script>
import formMixin from "./_formMixin"
import { validations, messages } from "@/service/validations/formCompany"
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
.c-input {
  appearance: none;
}
</style>
