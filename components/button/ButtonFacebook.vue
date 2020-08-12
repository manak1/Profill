<template>
  <a
    :href="`http://www.facebook.com/share.php?u=${tempUrl}`"
    class="py-2 pl-6 relative text-white text-center rounded-md c-button__facebook"
  >
    Facebook
  </a>
</template>

<script>
export default {
  data() {
    return {
      tempUrl: "https://unruffled-wozniak-c2de31.netlify.app/",
    }
  },
}
</script>

<style scoped>
.c-button__facebook {
  width: 120px;
  background-color: #3b5998;
}

.c-button__facebook:hover {
  background-color: #2d4373;
}

.c-button__facebook::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 12px;
  background-image: url("~assets/images/button/temp_facebook.svg");
  background-size: cover;
  height: 18px;
  width: 18px;
  display: inline-block;
}
</style>
