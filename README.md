# Typescript Raycast AI Tips

## 概要
Typescript x Raycast x AIで開発生産性を上げるtipsをまとめている
このreposにはVue Fes Japan × TSKaigi 合同イベント「次世代フロントエンドツールチェイン」では発表したソースコードが含まれている。
発表資料は[こちら](https://speakerdeck.com/nagauta/typescript-x-raycast-x-aidebian-erukai-fa-zhe-ti-yan)を参照のこと。

### AI コマンド
[日本語でアクティブなWebサイトを翻訳するAIコマンド(Pro only)](https://ray.so/prompts/shared?prompts=%7B%22creativity%22%3A%22low%22%2C%22icon%22%3A%22brand-openai%22%2C%22highlightEdits%22%3Afalse%2C%22title%22%3A%22Summarize%20Website%20in%20japanese%22%2C%22prompt%22%3A%22%7Bbrowser-tab%7D%E3%81%AE%E5%86%85%E5%AE%B9%E3%82%92%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%8F%E8%A6%81%E7%B4%84%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%22%2C%22model%22%3A%22openai-gpt-4o-mini%22%7D)

### Script Commands
`./scripts`
Script CommandsでAIを活用したtipsの紹介
設定方法は[こちら](https://manual.raycast.com/script-commands)を参照すること。

#### 日本語でアクティブなWebサイトを翻訳するスクリプトコマンド
ソースコードは`script/summarizeCurrentUrl.js`を参照すること
<br>
<img src="assets/script-command-example.png" width="40%">

### Extensions
ExtensionでAIを活用したtipsの紹介

#### 日本語でアクティブなWebサイトを翻訳するExtension
ソースコードは`src/summarize-url.tsx`を参照すること

`npm i`
`npm run dev`

<br>
<img src="assets/extension-example.png" width="40%">
