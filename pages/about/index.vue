<template>
  <div class="pt-12 container mx-auto">
    <h2 class="text-4xl font-bold">
      Profillの使い方
    </h2>
    <p class="my-2">
      Profill（プロフィル）は、オンライン会議などで使える背景型バーチャル名刺を、ブラウザ上で作れる無料サービスです。
    </p>
    <div class="my-12">
      <h3 class="mb-2 text-xl font-bold">
        基本的な使い方
      </h3>
      <ul>
        <li
          v-for="(instruction, index) in instructions"
          :key="index"
          class="c-accordion"
        >
          <ObjectAccordion
            :text="instruction.text"
            :title="instruction.title"
          />
        </li>
      </ul>
    </div>
    <div class="my-12">
      <h3 class="text-xl font-bold">
        推奨環境
      </h3>
      <p class="my-2">
        パソコン、スマートフォンどちらでも利用可能です。
        オフライン機能など、すべての機能を快適にご使用いただく場合は、下記の環境を推奨いたします。
      </p>
      <div class="my-5">
        <div>Windows</div>
        <div>OS: Windows10、ブラウザ: GoogleChrome</div>
        <div>Mac</div>
        <div>OS: High Sierra、ブラウザ: GoogleChrome</div>
        <div>Androidスマートフォン</div>
        <div>OS: 8.0.0以降、ブラウザ: GoogleChrome</div>
        <div>iPhone</div>
        <div>OS: 11.3以降、ブラウザ: Safari</div>
      </div>
      <p class="mt-12">
        ※ サポートが終了しているOS・ブラウザ（例:WindowsXP、Internet
        Explorer10以下など）ではサービスが正常に動作しない可能性があります。
      </p>
      <p class="mt-6 mb-40">
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
      instructions: [
        {
          title: "① 名刺テンプレートを作成する",
          text:
            "トップページに４つの名刺のテンプレートがあります。テンプレートごとにプロフィール情報の配置場所が異なっています。決まったら、「この名刺を選択する」をクリックしてください。",
        },
        {
          title: "② デザインを選択する",
          text:
            "テンプレートを選択すると、デザインが一覧で表示されます。デザインは、使用されている色の変更が出来るものと出来ないものがあります。デザインカードを１つ選択し、「入力を始める」ボタンをクリックしてください。",
        },
        {
          title: "③ プロフィール情報を入力する",
          text:
            "フォームの上にあるステップバーで今どこまで登録しているかを確認できます。入力内容はページを遷移しても保存されています。入力する情報は、ご自分の名刺に記載したい情報を入力してください。テキストの配置位置は変更できません。",
        },
        {
          title: "④ プレビューで確認する",
          text:
            "フォーム下部の「プレビューボタン」をクリックすると、フォームの入力結果が確認できます。全ての名刺は、テキストカラーの変更、背景への画像の適用が可能です。また、画像の明るさを調節することもできます。「カラー変更可」のデザインの場合は、デザインに使用されているカラーも変更できます。",
        },
        {
          title: "⑤  完成したデザインの確認",
          text:
            "会社情報まで情報を入力し、「次へ」ボタンを押すと、フォームの入力は完了です。デザインと入力した情報が合っているかを確認してください。",
        },
        {
          title: "⑥  ダウンロードする",
          text:
            "ダウンロードが完了すると、output.png という名前で名刺画像がダウンロードされます。",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
li.c-accordion {
  border: solid #ccc 1px;
  border-bottom: solid #fff 1px;
  &:last-child {
    border-bottom: solid #ccc 1px;
  }
}
</style>
