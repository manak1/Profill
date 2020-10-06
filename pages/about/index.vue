<template>
  <div v-if="instructions" class="pt-12 px-4 container mx-auto">
    <h2 class="mb-2 text-xl text-gray-700 font-bold">
      基本的な使い方
    </h2>
    <ul>
      <li
        v-for="(instruction, index) in instructions"
        :key="index"
        class="p-accordion__listItem"
      >
        <ObjectAccordion :text="instruction.text" :title="instruction.title" />
      </li>
    </ul>
    <div class="my-12">
      <h2 class="text-xl text-gray-700 font-bold">
        推奨環境
      </h2>
      <p class="my-2 text-gray-700">
        Google Chromeでのご利用を推奨します。
      </p>
      <p class="mt-12 text-gray-700">
        ※ サポートが終了しているOS・ブラウザ（例:WindowsXP、Internet
        Explorer10以下など）ではサービスが正常に動作しない可能性があります。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instructions: null,
    }
  },
  mounted() {
    const { instructions } = require("@/static/data/usage.json")
    this.instructions = [...instructions]
  },
}
</script>

<style lang="scss" scoped>
.p-accordion__listItem {
  border: solid #9eb9ff 1px;
  border-bottom: solid #fff 1px;
  &:last-child {
    border-bottom: solid #9eb9ff 1px;
  }
}
</style>
