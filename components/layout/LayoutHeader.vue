<template>
  <header class="w-full bg-white l-header">
    <nav class="flex items-center justify-between flex-wrap p-5 lg:p-6">
      <nuxt-link class="inline-block" to="/">
        <h1 class="text-white">
          <img
            src="@/assets/images/header/Rogo.svg"
            class="h-6 lg:h-8"
            alt="Profillロゴ"
          />
        </h1>
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
}
</style>
