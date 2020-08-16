# Profill

Profill は zoom などのビデオ会議で使える、名刺型バーチャル背景を作成できるアプリです。

## デプロイ先

https://unruffled-wozniak-c2de31.netlify.app/

## サービスについて

サービスについての仕様は `/doc` にて確認してください。

## 開発にあたって

### 必要な環境

- Node.js v12.x

### セットアップ

1. 依存関係のインストール

```bash
$ npm install
```

2. `documents/data` 内の `.yml` ファイルを `.json` に変換

```bash
$ npm run doc
```

3. 開発サーバーを立ち上げる

```bash
$ npm run dev
```

### Pull Request の作成にあたって

- `Pull Request` 作成後、自動で Netlify にデプロイが行われます。
エラーが出ていないことを確認してください。
 
