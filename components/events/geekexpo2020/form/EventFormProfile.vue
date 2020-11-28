<template>
  <EventFormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="university"
        >
          大学名
        </label>
        <input
          id="university"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="技育EXPO大学"
        />
      </div>
      <div class="w-full">
        <label
          class="uppercase tracking-wide text-gray-700 text-xs font-bold px-3 mb-2"
          for="name"
        >
          お名前
        </label>
        <div class="flex">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              id="name"
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="山田"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="太郎"
            />
          </div>
        </div>
      </div>
    </template>
  </EventFormBody>
</template>

<script>
export default {}
</script>

<style scoped></style>
