import { createNamespacedHelpers } from "vuex"

export const formMapper = createNamespacedHelpers("form")

export const profile = () => {
  return {
    first_name: "",
    last_name: "",
    first_name_kana: "",
    last_name_kana: "",
  }
}

export const sns = () => {
  return {
    instagrm: "",
    twitter: "",
    facebook: "",
  }
}

export const company = () => {
  return {
    organization: "",
    department: "",
    post_code: "",
    zip: "",
    mail: "",
    tel: "",
  }
}

export const state = () => {
  return {
    step1: profile(),
    step2: sns(),
    step3: company(),
  }
}

export const getters = {
  result(state) {
    return {
      first_name: state.step1.first_name,
      last_name: state.step1.last_name,
      first_name_kana: state.step1.first_name_kana,
      last_name_kana: state.step1.last_name_kana,
      instagrm: state.step2.instagrm,
      twitter: state.step2.twitter,
      facebook: state.step2.facebook,
      post_code: state.step3.post_code,
      organization: state.step3.organization,
      department: state.step3.department,
      zip: state.step3.zip,
      mail: state.step3.mail,
      tel: state.step3.tel,
    }
  },
}

export const mutations = {
  SET_PROFILE(state, data) {
    state.step1 = { ...data }
  },
  SET_SNS(state, data) {
    state.step2 = { ...data }
  },
  SET_COMPANY(state, data) {
    state.step3 = { ...data }
  },
}
