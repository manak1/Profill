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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="株式会社hogehoge"
          @input="input"
        />
        <span
          v-if="!$v.form.organization.maxLength && $v.form.organization.$dirty"
          class="text-indigo-500"
        >
          {{ messages.organization.maxLength }}
        </span>
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="エンジニア・デザイナー"
          @input="input"
        />
        <span
          v-if="!$v.form.department.maxLength && $v.form.department.$dirty"
          class="text-indigo-500"
        >
          {{ messages.department.maxLength }}
        </span>
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="012-3456"
          @input="input"
        />
        <span
          v-if="!$v.form.post_code.judgePostCode && $v.form.post_code.$dirty"
          class="text-indigo-500"
        >
          {{ messages.post_code.judgePostCode }}
        </span>
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
        <span
          v-if="!$v.form.zip.maxLength && $v.form.zip.$dirty"
          class="ext-indigo-500"
        >
          {{ messages.zip.maxLength }}
        </span>
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="email"
          placeholder="hogehoge@gmail.com"
          @input="input"
        />
        <span
          v-if="!$v.form.mail.mustBeEmail && $v.form.mail.$dirty"
          class="text-indigo-500"
        >
          {{ messages.mail.mustBeEmail }}
        </span>
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="01-234-5678"
          @input="input"
        />
        <span
          v-if="!$v.form.tel.judgeTel && $v.form.tel.$dirty"
          class="text-indigo-500"
        >
          {{ messages.tel.judgeTel }}
        </span>
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="https://hogehoge.com"
          @input="input"
        />
        <span
          v-if="!$v.form.weblink.judgeWebLink && $v.form.weblink.$dirty"
          class="text-indigo-500"
        >
          {{ messages.weblink.judgeWebLink }}
        </span>
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

<style scoped></style>
