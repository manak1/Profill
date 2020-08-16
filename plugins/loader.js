export default ({ store }, inject) => {
  inject("loader", {
    on() {
      store.commit("loader/on")
    },
    off() {
      store.commit("loader/off")
    },
  })
}
