import { maxLength } from "vuelidate/lib/validators"

export const messages = {
  first_name: {
    maxLength: "名前は200字以内です",
  },
  last_name: {
    maxLength: "名前は200字以内です",
  },
  first_name_kana: {
    maxLength: "名前は200字以内です",
  },
  last_name_kana: {
    maxLength: "名前は200字以内です",
  },
}

export const validations = {
  form: {
    first_name: { maxLength: maxLength(200) },
    last_name: { maxLength: maxLength(200) },
    first_name_kana: { maxLength: maxLength(200) },
    last_name_kana: { maxLength: maxLength(200) },
  },
}
