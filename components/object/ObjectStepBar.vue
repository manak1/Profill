<template>
  <div class="w-full py-6">
    <div class="flex">
      <div v-for="step in steps" :key="step.index" class="w-1/4">
        <div class="relative mb-2">
          <template v-if="step.isBar">
            <div
              class="absolute flex align-center items-center align-middle content-center"
              style="
                width: calc(100% - 2.5rem - 1rem);
                top: 50%;
                transform: translate(-50%, -50%);
              "
            >
              <div
                class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1"
              >
                <div
                  class="w-0 c-step-color py-1 rounded"
                  :class="activeBarClass(step)"
                ></div>
              </div>
            </div>
          </template>
          <nuxt-link :to="`/${template}/${type}/${step.state}`" class="block">
            <span
              class="inline-block w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center"
              :class="activeCircleClass(step)"
            >
              <i
                class="flex justify-center items-center w-full"
                :class="`c-icon__${step.icon}`"
              />
            </span>
          </nuxt-link>
        </div>
        <div class="text-xs text-center text-gray-700 md:text-base">
          {{ step.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          id: 1,
          icon: "name",
          label: "お名前",
          isBar: false,
          state: "step1",
        },
        {
          id: 2,
          icon: "sns",
          label: "SNS",
          isBar: true,
          state: "step2",
        },
        {
          id: 3,
          icon: "company",
          label: "会社情報",
          isBar: true,
          state: "step3",
        },
        {
          id: 4,
          icon: "download",
          label: "ダウンロード",
          isBar: true,
          state: "step4",
        },
      ],
    }
  },
  computed: {
    target() {
      const targetRoute = this.$route.name
      const targetStep = targetRoute.split("-")[2]
      return this.steps.find((value) => value.state === targetStep)
    },
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    activeBarClass(item) {
      const targetData = this.target
      return {
        bar: item.id <= targetData.id,
      }
    },
    activeCircleClass(item) {
      const targetData = this.target
      return {
        "c-step-color": item.id <= targetData.id,
        "bg-gray-200": item.id > targetData.id,
      }
    },
  },
}
</script>

<style scoped>
.c-icon__name::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 26px;
  background-image: url("~assets/images/stepnav/icon-profile.svg");
}
.c-icon__sns::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("~assets/images/stepnav/icon-sns.svg");
}

.c-icon__company::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("~assets/images/stepnav/icon-company.svg");
}

.c-icon__download::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("~assets/images/stepnav/icon-finished.svg");
}
.bar {
  width: 100%;
}
.c-step-color {
  background: linear-gradient(180deg, #9095ff 0%, rgba(255, 255, 255, 0) 100%),
    #9eb9ff;
}
</style>
