import { createNamespacedHelpers } from "vuex"

export const colorMapper = createNamespacedHelpers("color")

export const state = () => {
  return {
    object_color: "#63B3ED",
    text_color: "#4A5568",
  }
}

export const getters = {
  color(state) {
    return {
      object_color: state.object_color,
      text_color: state.text_color,
    }
  },
}

export const mutations = {
  SET_COLORS(state, { object_color, text_color }) {
    state.object_color = object_color
    state.text_color = text_color
  },
}
