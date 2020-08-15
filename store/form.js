import { createNamespacedHelpers } from "vuex"

export const formMapper = createNamespacedHelpers("form")

export const profile = () => {
  return {
    first_name: "池田",
    last_name: "愛樹",
    first_name_kana: "いけだ",
    last_name_kana: "まなき",
  }
}

export const sns = () => {
  return {
    instagram: "@mikeana",
    twitter: "@mikeana",
    facebook: "@mikeana",
  }
}

export const company = () => {
  return {
    organization: "株式会社chatbox",
    department: "フロントエンド",
    post_code: "660-0045",
    zip: "兵庫県沖縄市1-23-2",
    mail: "tokoro@tokoro.test",
    tel: "090-9233-5455",
    weblink: "https",
  }
}

export const colors = () => {
  return {
    background_color: "#63B3ED",
    text_color: "#4A5568",
  }
}

export const state = () => {
  return {
    step1: profile(),
    step2: sns(),
    step3: company(),
    colors: colors(),
  }
}

export const getters = {
  result(state) {
    return {
      first_name: state.step1.first_name,
      last_name: state.step1.last_name,
      first_name_kana: state.step1.first_name_kana,
      last_name_kana: state.step1.last_name_kana,
      instagram: state.step2.instagram,
      twitter: state.step2.twitter,
      facebook: state.step2.facebook,
      organization: state.step3.organization,
      department: state.step3.department,
      post_code: state.step3.post_code,
      zip: state.step3.zip,
      mail: state.step3.mail,
      tel: state.step3.tel,
      weblink: state.step3.weblink,
      background_color: state.colors.background_color,
      text_color: state.colors.text_color,
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
  SET_COLORS(state, data) {
    state.colors = { ...data }
  },
}
