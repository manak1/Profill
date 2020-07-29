import { required } from "vuelidate/lib/validators"

export const messages = {
  first_name: {
    mustBeKanji: "漢字で",
  },
  last_name: {
    mustBeKanji: "漢字で",
  },
  first_name_kana: {
    mustBeKana: "かな",
  },
  last_name_kana: {
    mustBeKana: "かな",
  },
}

export const validations = {
  form: {
    first_name: { required },
    last_name: {},
    first_name_kana: {},
    last_name_kana: {},
  },
}
