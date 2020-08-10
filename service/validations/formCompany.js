import { required } from "vuelidate/lib/validators"

export const messages = {
  organization: {
    mustBeNumber: "半角数字",
  },
  department: {},
  post_code: {
    mustBeNumber: "半角数字",
  },
  zip: {},
  mail: {
    mustBeNumber: "半角数字",
  },
  tel: {},
}

export const validations = {
  form: {
    organization: { required },
    department: {},
    post_code: {},
    zip: {},
    mail: {},
    tel: {},
  },
}
