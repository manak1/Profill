import { maxLength } from "vuelidate/lib/validators"

export const mustBeEmail = (value) => {
  return /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  )
}
export const judgeWebLink = (value) => {
  return /^http|https/.test(value)
}
export const judgePostCode = (value) => {
  return /^[0-9]{3}-[0-9]{4}$/.test(value)
}
export const judgeTel = (value) => {
  return /^[0-9]{2,4}-[0-9]{2,4}-[0-9]{2,4}$/.test(value)
}

export const messages = {
  organization: {
    maxLength: "組織名は50字以内です",
  },
  department: {
    maxLength: "役職は50字以内です",
  },
  post_code: {
    judgePostCode: "ハイフン付きの〇〇〇-〇〇〇〇の形式で入力してください",
  },
  zip: {
    maxLength: "住所は100字以内です",
  },
  mail: {
    mustBeEmail: "メールは正しい形式で入力してください",
  },
  tel: {
    judgeTel: "ハイフン付きの形式で入力してください",
  },
  weblink: {
    judgeWebLink: "http または https から始まるリンクを入力してください",
  },
}

export const validations = {
  form: {
    organization: { maxLength: maxLength(50) },
    department: { maxLength: maxLength(50) },
    post_code: {
      judgePostCode,
    },
    zip: { maxLength: maxLength(100) },
    mail: {
      mustBeEmail,
    },
    tel: {
      judgeTel,
    },
    weblink: {
      judgeWebLink,
    },
  },
}
