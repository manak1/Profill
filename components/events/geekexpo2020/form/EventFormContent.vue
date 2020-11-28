<template>
  <EventFormBody>
    <template v-slot:body>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-right mb-8">
          <select
            class="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option>Q.好きなラーメン屋は?</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Black</option>
            <option>Orange</option>
            <option>Purple</option>
            <option>Gray</option>
            <option>White</option>
          </select>
        </div>
        <div class="mb-3">
          <textarea
            id="hitokoto"
            placeholder="A.ラーメン二郎しか勝たん"
            class="autoexpand tracking-wide py-2 px-4 leading-relaxed appearance-none block w-full bg-white border border-gray-400 rounded-md hover:border-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </template>
  </EventFormBody>
</template>

<script>
export default {}
</script>

<style scoped></style>
