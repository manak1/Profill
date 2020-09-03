import { createNamespacedHelpers } from "vuex"

export const imageMapper = createNamespacedHelpers("image")

export const state = () => {
  return {
    url: null,
    opacity: null,
  }
}

export const getters = {
  image(state) {
    return {
      url: state.url,
      opacity: state.opacity,
    }
  },
}

export const mutations = {
  SET_IMAGE(state, { url }) {
    state.url = url
  },
  SET_OPACITY(state, { opacity }) {
    state.opacity = opacity
  },
}
