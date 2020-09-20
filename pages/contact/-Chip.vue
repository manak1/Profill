<template>
  <div>
    <span
      class="block px-2 mx-2 mb-1 text-xs text-center text-white rounded-lg pt-1"
      :class="chipClass"
    >
      <slot name="body" />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    chipClass() {
      return {
        "bg-red-500": this.required,
        "bg-gray-500": !this.required,
      }
    },
  },
}
</script>
