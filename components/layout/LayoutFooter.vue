<template>
  <footer class="bg-gray-300">
    <div class="container mx-auto px-8 py-12">
      <h2 class="text-center text-gray-600 text-2xl font-bold mb-8">
        製作者
      </h2>
      <div v-if="data" class="w-full lg:w-1/2 mx-auto">
        <div
          v-for="item in data"
          :key="item.index"
          class="flex justify-between items-center"
        >
          <div class="flex items-center">
            <p>
              <img
                :src="item.avatar"
                style="width: 40px; height: 40px;"
                :alt="item.name"
              />
            </p>
            <div class="pl-4 text-gray-700 text-base">
              {{ item.name }}({{ item.position }})
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <a
                v-if="item.tools.twitter"
                :href="item.tools.twitter"
                target="_blank"
                rel="noopener"
                aria-label="twitterリンク"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__twitter" />
              </a>
              <a
                v-if="item.tools.instagram"
                :href="item.tools.instagram"
                target="_blank"
                rel="noopener"
                aria-label="instagramリンク"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__instagram" />
              </a>
              <a
                v-if="item.tools.facebook"
                :href="item.tools.facebook"
                target="_blank"
                rel="noopener"
                aria-label="facebookリンク"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__facebook" />
              </a>
              <a
                v-if="item.tools.github"
                :href="item.tools.github"
                target="_blank"
                rel="noopener"
                aria-label="githubリンク"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  mounted() {
    const { profiles } = require("@/static/data/profiles.json")
    this.data = profiles
  },
}
</script>

<style scoped>
.l-icon__twitter {
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/sns/twitter-color.svg");
}
.l-icon__instagram::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/sns/instagram-color.svg");
}

.l-icon__facebook::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/sns/facebook-color.svg");
}
.l-icon__github::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/sns/github-color.svg");
}
</style>
