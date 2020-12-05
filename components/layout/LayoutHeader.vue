<template>
  <header class="w-full fixed bg-white l-header">
    <nav class="flex items-center justify-between flex-wrap p-5 lg:p-6">
      <a class="inline-block" href="/">
        <h1 class="text-white">
          <img
            src="@/assets/images/header/Rogo.svg"
            class="h-8"
            alt="Profillロゴ"
          />
        </h1>
      </a>
      <nuxt-link
        class="bg-transparent text-blue-700 hover:opacity-75 py-2 px-4 border border-blue-500 rounded"
        to="/about"
      >
        使い方
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.l-header {
  border-bottom: 1px solid #9eb9ff;
  z-index: 80;
}
</style>
