<template>
  <footer class="bg-gray-300">
    <div class="container mx-auto px-8 py-12">
      <div class="w-full lg:w-1/2 mx-auto">
        <div
          v-for="item in data"
          :key="item.index"
          class="flex justify-between items-center"
        >
          <div class="flex items-center">
            <p>
              <img :src="item.avatar" style="width: 40px; height: 40px;" />
            </p>
            <div class="pl-4 text-gray-700 text-base">
              {{ item.name }}
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <a
                :href="item.tools.twitter"
                target="_blank"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__instagram" />
              </a>
              <a
                :href="item.tools.twitter"
                target="_blank"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__twitter" />
              </a>
              <a
                :href="item.tools.facebook"
                target="_blank"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__facebook" />
              </a>
              <a
                :href="item.tools.instagram"
                target="_blank"
                class="inline-block my-2 mx-1 lg:mx-2"
              >
                <i class="l-icon__instagram" />
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
      data: [
        {
          name: "yusuke",
          avatar: "/profile/avator.png",
          tools: {
            twitter: "https://chatbox-inc.com/",
            instagram: "https://chatbox-inc.com/",
            facebook: "https://chatbox-inc.com/",
            github: "https://chatbox-inc.com/",
          },
        },
        {
          name: "yusuke",
          avatar: "/profile/avator.png",
          tools: {
            twitter: "https://chatbox-inc.com/",
            instagram: "https://chatbox-inc.com/",
            facebook: "https://chatbox-inc.com/",
            github: "https://chatbox-inc.com/",
          },
        },
        {
          name: "yusuke",
          avatar: "/profile/avator.png",
          tools: {
            twitter: "https://chatbox-inc.com/",
            instagram: "https://chatbox-inc.com/",
            facebook: "https://chatbox-inc.com/",
            github: "https://chatbox-inc.com/",
          },
        },
        {
          name: "yusuke",
          avatar: "/profile/avator.png",
          tools: {
            twitter: "https://chatbox-inc.com/",
            instagram: "https://chatbox-inc.com/",
            facebook: "https://chatbox-inc.com/",
            github: "https://chatbox-inc.com/",
          },
        },
      ],
    }
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
  background-image: url("~assets/images/form/sns/twitter-color.svg");
}
.l-icon__instagram::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/form/sns/instagram-color.svg");
}

.l-icon__facebook::before {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/form/sns/facebook-color.svg");
}
</style>
