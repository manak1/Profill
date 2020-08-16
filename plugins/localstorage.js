import createPersistedState from "vuex-persistedstate"

export default ({ store }) => {
  createPersistedState({
    key: "profill",
    paths: [store.form],
  })(store)
}
