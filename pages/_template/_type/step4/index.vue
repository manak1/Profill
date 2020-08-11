<template>
  <PagesBody :title="'ダウンロード'">
    <template v-slot:body>
      <div class="text-center px-6 py-4">
        <button
          class="mx-auto w-1/2 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
        >
          ダウンロード
        </button>
      </div>
      <div class="text-center mb-20">
        <ButtonDanger class="mx-6" @linkToPrev="linkToPrev" />
      </div>
    </template>
  </PagesBody>
</template>
<script>
import { formMapper } from "@/store/form"
export default {
  computed: {
    ...formMapper.mapGetters(["result"]),
    template() {
      return this.$route.params.template
    },
  },
  methods: {
    linkToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
