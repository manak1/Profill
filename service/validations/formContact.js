import { required } from "vuelidate/lib/validators"

export const messages = {
  mail: {
    mustBeNumber: "半角数字",
  },
  tel: {},
}

export const validations = {
  form: {
    mail: { required },
    tel: {},
  },
}
