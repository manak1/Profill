<template>
  <div class="w-full">
    <ObjectLoader v-if="loading" />
    <LayoutHeader />
    <Nuxt />
  </div>
</template>

<script>
import LoadingMapper from "@/store/loader"
export default {
  computed: {
    ...LoadingMapper.mapState(["loading"]),
  },
}
</script>
