import { required } from "vuelidate/lib/validators"

export const messages = {
  organization: {
    mustBeNumber: "半角数字",
  },
  department: {},
}

export const validations = {
  form: {
    organization: { required },
    department: {},
  },
}
