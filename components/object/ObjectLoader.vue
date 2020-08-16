<template>
  <div class="load opacity-75">
    <div class="ball-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
export default {
  mounted() {
    const modal = this.$refs.confirmBox
    disableBodyScroll(modal)
  },
  beforeDestroy() {
    clearAllBodyScrollLocks()
  },
}
</script>

<style scoped>
/* stylelint-disable */
@keyframes loading {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    width: 25px;
    background-color: #79bbc1;
    transform: translate(80px, 0);
  }
}

.load {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 1);
}

@-webkit-keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.ball-spin-fade-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -15px -10px;
}

.ball-spin-fade-loader > div {
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 2px;
  background-color: #79bbc1;
  border-radius: 100%;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.ball-spin-fade-loader > div:nth-child(1) {
  top: 25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s -0.96s infinite linear;
  animation: ball-spin-fade-loader 1s -0.96s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(2) {
  top: 17.04545px;
  left: 17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s -0.84s infinite linear;
  animation: ball-spin-fade-loader 1s -0.84s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 25px;
  -webkit-animation: ball-spin-fade-loader 1s -0.72s infinite linear;
  animation: ball-spin-fade-loader 1s -0.72s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(4) {
  top: -17.04545px;
  left: 17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s -0.6s infinite linear;
  animation: ball-spin-fade-loader 1s -0.6s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(5) {
  top: -25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s -0.48s infinite linear;
  animation: ball-spin-fade-loader 1s -0.48s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(6) {
  top: -17.04545px;
  left: -17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s -0.36s infinite linear;
  animation: ball-spin-fade-loader 1s -0.36s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -25px;
  -webkit-animation: ball-spin-fade-loader 1s -0.24s infinite linear;
  animation: ball-spin-fade-loader 1s -0.24s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(8) {
  top: 17.04545px;
  left: -17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s -0.12s infinite linear;
  animation: ball-spin-fade-loader 1s -0.12s infinite linear;
}
</style>
