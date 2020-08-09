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

export const zip = () => {
  return {
    post_code: "",
    zip: "",
  }
}

export const contact = () => {
  return {
    mail: "",
    tel: "",
  }
}

export const company = () => {
  return {
    organization: "",
    department: "",
  }
}

export const state = () => {
  return {
    step1: profile(),
    step2: zip(),
    step3: contact(),
    step4: company(),
  }
}

export const getters = {
  result(state) {
    return {
      first_name: state.step1.first_name,
      last_name: state.step1.last_name,
      first_name_kana: state.step1.first_name_kana,
      last_name_kana: state.step1.last_name_kana,
      post_code: state.step2.post_code,
      zip: state.step2.zip,
      mail: state.step3.mail,
      tel: state.step3.tel,
      organization: state.step4.organization,
      department: state.step4.department,
    }
  },
}

export const mutations = {
  SET_PROFILE(state, data) {
    state.step1 = { ...data }
  },
  SET_ZIP(state, data) {
    state.step2 = { ...data }
  },
  SET_CONTACT(state, data) {
    state.step3 = { ...data }
  },
  SET_COMPANY(state, data) {
    state.step4 = { ...data }
  },
}
