<template>
  <form class="w-full max-w-lg mx-auto">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          組織名
        </label>
        <input
          id="grid-password"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="password"
          placeholder="株式会社hogehoge"
        />
        <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          役職名
        </label>
        <input
          id="grid-city"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Albuquerque"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped></style>
