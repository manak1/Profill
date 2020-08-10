<template>
  <PagesBody :title="'ダウンロード'">
    <template v-slot:body>
      ダウンロードボタン
    </template>
  </PagesBody>
</template>
<script>
import { formMapper } from "@/store/form"
export default {
  computed: {
    ...formMapper.mapGetters(["result"]),
    slug() {
      return this.$route.params.template
    },
  },
}
</script>

<style scoped></style>
