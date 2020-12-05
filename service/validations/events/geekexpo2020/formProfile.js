import { maxLength } from "vuelidate/lib/validators"

export const messages = {
  college: {
    maxLength: "大学名は50字以内が推奨されています",
  },
  first_name: {
    maxLength: "名前は25字以内が推奨されています",
  },
  last_name: {
    maxLength: "名前は25字以内が推奨されています",
  },
}

export const validations = {
  form: {
    college: { maxLength: maxLength(50) },
    first_name: { maxLength: maxLength(25) },
    last_name: { maxLength: maxLength(25) },
  },
}
