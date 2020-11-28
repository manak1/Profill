<template>
  <EventFormBody>
    <template v-slot:body>
      <div
        class="flex justify-center items-center w-full md:w-1/2 px-3 mb-6 md:mb-0"
      >
        <img
          src="@/assets/images/sns/twitter-color.svg"
          alt="twitter アイコン"
        />
        <input
          id="sns1"
          class="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 ml-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="@your account"
        />
      </div>
      <div
        class="flex justify-center items-center w-full md:w-1/2 px-3 mb-6 md:mb-0"
      >
        <img src="@/assets/images/sns/github-color.svg" alt="github アイコン" />
        <input
          id="sns2"
          class="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 ml-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="your name"
        />
      </div>
    </template>
  </EventFormBody>
</template>

<script>
export default {}
</script>

<style scoped></style>
