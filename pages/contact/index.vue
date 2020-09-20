<template>
  <section class="container mx-auto">
    <FormBody>
      <template #body>
        <p class="text-4xl pt-16">
          お問合せフォーム
        </p>
        <p class="text-md pt-4">
          ご意見、ご要望をお持ちの方はこちらのフォームにご入力の上、送信してください。
        </p>
        <div class="w-full pt-12">
          <label
            class="tracking-wide text-gray-800 text-md px-3 flex"
            for="content"
          >
            問い合わせ内容
            <Chip required>
              <template #body>
                必須
              </template>
            </Chip>
          </label>
          <textarea
            id="content"
            class="w-full border p-2 rounded-md"
            name="content"
            rows="5"
          ></textarea>
        </div>
        <div class="w-full pt-8">
          <label
            class="tracking-wide text-gray-800 text-md px-3 flex"
            for="mail"
          >
            メールアドレス
            <Chip>
              <template #body>
                任意
              </template>
            </Chip>
          </label>
          <input
            id="mail"
            class="w-full border h-8 p-2 rounded-md"
            type="text"
          />
        </div>
        <div class="w-full pt-8">
          <label class="tracking-wide text-gray-800 text-md px-3 flex">
            お使いのOS（不具合報告の場合）
            <Chip>
              <template #body>
                任意
              </template>
            </Chip>
          </label>
          <div class="flex">
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="device1" class="w-full">
                <input id="device1" name="device" class="border" type="radio" />
                Windows
              </label>
            </div>
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="device2" class="w-full">
                <input id="device2" name="device" class="border" type="radio" />
                Mac
              </label>
            </div>
          </div>
          <div class="flex">
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="device3" class="w-full">
                <input id="device3" name="device" class="border" type="radio" />
                Linux
              </label>
            </div>
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="device4" class="w-full">
                <input id="device4" name="device" class="border" type="radio" />
                その他
              </label>
            </div>
          </div>
        </div>
        <div class="w-full pt-8">
          <label class="tracking-wide text-gray-800 text-md px-3 flex">
            お使いのブラウザ（不具合報告の場合）
            <Chip>
              <template #body>
                任意
              </template>
            </Chip>
          </label>
          <div class="flex">
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="browser1" class="w-full">
                <input
                  id="browser1"
                  name="browser"
                  class="border"
                  type="radio"
                />
                Safari
              </label>
            </div>
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="browser2" class="w-full">
                <input
                  id="browser2"
                  name="browser"
                  class="border"
                  type="radio"
                />
                Chrome
              </label>
            </div>
          </div>
          <div class="flex">
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="browser3" class="w-full">
                <input
                  id="browser3"
                  name="browser"
                  class="border"
                  type="radio"
                />
                Firefox
              </label>
            </div>
            <div
              class="w-full md:w-1/2 px-3 m-1 p-2 md:mb-0 flex border rounded-md"
            >
              <label for="browser4" class="w-full">
                <input
                  id="browser4"
                  name="browser"
                  class="border"
                  type="radio"
                />
                その他
              </label>
            </div>
          </div>
        </div>
        <div class="text-center mt-24 w-full">
          <a
            class="inline-flex items-center justify-center w-1/2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border rounded"
          >
            <span>送信</span>
          </a>
        </div>
        <span class="py-12 flex">
          <i class="c-icon__download inline-block" />
          <router-link to="#">
            ▶ よくある質問
          </router-link>
        </span>
      </template>
    </FormBody>
  </section>
</template>
<script>
import Chip from "./-Chip"
export default {
  components: {
    Chip,
  },
}
</script>
