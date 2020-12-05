import { createNamespacedHelpers } from "vuex"

export const geekexpoMapper = createNamespacedHelpers(
  "events/geekexpo2020/form"
)

const profile = () => {
  return {
    college: "",
    first_name: "",
    last_name: "",
  }
}

const sns = () => {
  return {
    twitter: "",
    github: "",
  }
}

const content = () => {
  return {
    question: "",
    comment: "",
  }
}

export const state = () => {
  return {
    step1: profile(),
    step2: sns(),
    step3: content(),
  }
}

export const getters = {
  result(state) {
    return {
      college: state.step1.college,
      first_name: state.step1.first_name,
      last_name: state.step1.last_name,
      twitter: state.step2.twitter,
      github: state.step2.github,
      question: state.step3.question,
      comment: state.step3.comment,
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
  SET_CONTENT(state, data) {
    state.step3 = { ...data }
  },
  CLEAR_INPUT(state) {
    state.step1 = profile()
    state.step2 = sns()
    state.step3 = content()
  },
}
