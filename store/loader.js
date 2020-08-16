import { createNamespacedHelpers } from "vuex"

export default {
  ...createNamespacedHelpers("loader"),
  state() {
    return {
      loading: false,
    }
  },
  mutations: {
    on(state) {
      state.loading = true
    },
    off(state) {
      state.loading = false
    },
  },
}
