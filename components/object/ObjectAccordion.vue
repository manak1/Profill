<template>
  <div class="w-full c-accordion border">
    <a
      href="#"
      class="flex justify-between c-accordion__container px-5 py-2"
      @click.prevent="toggle"
    >
      <p class="text-sm">{{ title }}</p>
      <img
        src="@/assets/images/other/chevrondown-icon.svg"
        alt="下向きのシェブロン"
        :class="activeIconClass"
      />
    </a>
    <div v-if="show" class="text-xs c-accordion__body" :class="activeBodyClass">
      <p class="py-2 px-8">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    activeIconClass() {
      return {
        "c-accordion__icon": true,
        "c-accordion__iconActive": this.show,
      }
    },
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.c-accordion {
  border-color: #ccc;
  color: #474747;
  &__container {
    background-color: #ccc;
    transition: 0.3s;
    &:hover {
      background-color: #b7b7b7;
      transition: 0.3s;
    }
  }
  &__icon {
    transition: 0.1s ease-in;
    transform: rotate(-90deg);
  }

  &__iconActive {
    transition: 0.3s ease-out;
    transform: rotate(0deg);
  }
}
</style>
