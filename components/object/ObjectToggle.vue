<template>
  <label
    for="toggle"
    class="c-toggle flex justify-center items-center cursor-pointer"
  >
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input
        id="toggle"
        v-model="isDark"
        type="checkbox"
        class="hidden"
        @click="setOpacity"
      />
      <!-- line -->
      <div
        class="c-toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
      ></div>
      <!-- dot -->
      <div
        class="c-toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
      ></div>
    </div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    setOpacity() {
      this.$emit("setOpacity", this.isDark)
    },
  },
}
</script>
<style lang="scss" scoped>
.c-toggle {
  width: 50px;
  margin: 0 auto;

  &__dot {
    top: -0.25rem;
    left: -0.25rem;
    transition: all 0.3s ease-in-out;
    background-color: #dfdfdf;
  }
}

input:checked ~ .c-toggle__dot {
  transform: translateX(100%);
  background-color: #2a2a2a;
}
</style>
