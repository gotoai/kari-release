---
sidebar_position: 6
title: パワーポイントを翻訳する
---

# パワーポイントを翻訳する

:::info 検証環境

本ページの手順は、以下の環境で動作を確認しています。

- **Kari**: バージョン 0.5.0 Beta
- **AI プロバイダー**: スタンドアローン OumiGo (バージョン 0.3.0)
- **GPU モデル**: A40
- **LLM**: Google Gemma 4 31B IT (Google により量子化済み、Hugging Face リポジトリ: `google/gemma-4-31B-it-qat-w4a16-ct`)

:::

Kari を活用して、手元のパワーポイントを他の言語に翻訳できます。PPTXフォーマットに対応しています。

- Kari のエクスプローラーでファイルの格納フォルダーを開いて、ファイルをクリックして内容を表示させます。  
なお、例示用のPPTXファイルは、厚生労働省のホームページ「イクメンプロジェクト資料ダウンロード」の「学生・若手社会人向け 研修資料」(`training_young2023.pptx`) をダウンロードすることができます。ここでは `Files` フォルダーに保存しています。  
URL: https://ikumen-project.mhlw.go.jp/library/training/

- 新しいチャットセッションを作成し、インプットボックスに「このPPTXファイルを英語版に翻訳し、ファイル「Files/training_young2023_en.pptx」として保存してください。」を入力し、AIに作業を指示します。

![AIにPPTX翻訳を指示する](@site/docs/current/main/usekari/img/usekari_translatepptxinstruction.png)

- AIが翻訳したファイルをローカルフォルダーに保存します。ファイルを開いて結果を確認します。

![AIのPPTX翻訳結果を確認する](@site/docs/current/main/usekari/img/usekari_translatepptxresult.png)

:::caution

使用するLLMにより、翻訳の品質や体裁が変わることがあります。

:::