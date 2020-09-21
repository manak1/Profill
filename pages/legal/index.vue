<template>
  <section class="p-legal px-4 pt-12 pb-32">
    <div class="p-legal__box container mx-auto bg-white py-6 pb-24">
      <div class="p-legal__legals pt-6" v-html="renderMd"></div>
      <p class="text-right mt-8 p-legal__end">
        以上
      </p>
    </div>
  </section>
</template>

<script>
import legal from "@/documents/data/legal.md"
export default {
  computed: {
    renderMd() {
      return legal
    },
  },
}
</script>

// eslint-disable-next-line vue-scoped-css/require-scoped
<style lang="scss">
.p-legal {
  background-color: #e3effa;

  &__box {
    padding-left: 120px;
    padding-right: 120px;
  }
  &__legals {
    h2 {
      font-size: 30px;
      margin-top: 13px;
      line-height: 45px;
      font-weight: bold;

      p {
        margin-top: 20px;
        line-height: 19px;
      }
    }

    h3 {
      margin-top: 35px;
      font-size: 18px;
      line-height: 27px;
      font-weight: bold;
    }

    p {
      font-size: 13px;
      margin-top: 10px;

      + ol {
        padding-left: 20px;
      }
    }

    li {
      margin-top: 10px;
      font-size: 13px;
      line-height: 19px;
      font-weight: middle;

      ol {
        padding-left: 20px;
      }
    }
  }

  &__end {
    font-size: 14px;
  }
}
</style>
