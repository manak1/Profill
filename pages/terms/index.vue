<template>
  <PagesBody :title="'利用規約'">
    <template v-slot:body>
      利用規約画面
    </template>
  </PagesBody>
</template>

<script>
import PagesBody from "@/components/pages/pagesBody"
export default {
  components: { PagesBody },
}
</script>

<style scoped></style>
