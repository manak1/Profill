import { maxLength } from "vuelidate/lib/validators"

export const mustBeEmail = (value) => {
  return /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  )
}

export const messages = {
  organization: {
    maxLength: "名前は200字以内です",
  },
  department: {
    maxLength: "名前は200字以内です",
  },
  post_code: {},
  zip: {
    maxLength: "名前は200字以内です",
  },
  mail: {
    mustBeEmail: "メール形式で入力してください",
  },
  tel: {},
  weblink: {},
}

export const validations = {
  form: {
    organization: { maxLength: maxLength(200) },
    department: { maxLength: maxLength(200) },
    post_code: {},
    zip: {},
    mail: {
      mustBeEmail,
    },
    tel: {},
    weblink: {},
  },
}
