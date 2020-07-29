import { createNamespacedHelpers } from "vuex"

export const formMapper = createNamespacedHelpers("form")

export const profile = () => {
  return {
    first_name: null,
    last_name: null,
    first_name_kana: null,
    last_name_kana: null,
  }
}

export const zip = () => {
  return {
    post_code: null,
    zip: null,
  }
}

export const contact = () => {
  return {
    mail: null,
    tel: null,
  }
}

export const company = () => {
  return {
    organization: null,
    department: null,
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
