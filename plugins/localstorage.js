import createPersistedState from "vuex-persistedstate"

export default ({ store }) => {
  createPersistedState({
    key: "card-app",
    paths: [store.form],
  })(store)
}
