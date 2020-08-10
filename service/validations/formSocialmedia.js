import { required } from "vuelidate/lib/validators"

export const messages = {
  instagram: {
    mustBeNumber: "半角数字",
  },
  twitter: {},
  facebook: {},
}

export const validations = {
  form: {
    instagram: { required },
    twitter: {},
    facebook: {},
  },
}
