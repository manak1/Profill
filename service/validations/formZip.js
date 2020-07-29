import { required } from "vuelidate/lib/validators"

export const messages = {
  post_code: {
    mustBeNumber: "半角数字",
  },
  zip: {},
}

export const validations = {
  form: {
    post_code: { required },
    zip: {},
  },
}
