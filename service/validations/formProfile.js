import { maxLength } from "vuelidate/lib/validators"

export const messages = {
  first_name: {
    maxLength: "名前は25字以内が推奨されています",
  },
  last_name: {
    maxLength: "名前は25字以内が推奨されています",
  },
  first_name_kana: {
    maxLength: "ふりがなは25字以内が推奨されています",
  },
  last_name_kana: {
    maxLength: "ふりがなは25字以内が推奨されています",
  },
}

export const validations = {
  form: {
    first_name: { maxLength: maxLength(25) },
    last_name: { maxLength: maxLength(25) },
    first_name_kana: { maxLength: maxLength(25) },
    last_name_kana: { maxLength: maxLength(25) },
  },
}
