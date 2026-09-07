---
sidebar_position: 4
title: PDF・ワード文書を翻訳する
---

# PDF・ワード文書を翻訳する

:::info 検証環境

本ページの手順は、以下の環境で動作を確認しています。

- **Kari**: バージョン 0.5.0 Beta
- **AI プロバイダー**: スタンドアローン OumiGo (バージョン 0.3.0)
- **GPU モデル**: A40
- **LLM**: Meta Muse-Glimmer-30B (GotoAI により量子化済み、Hugging Face リポジトリ: `GotoAI-Inc/Muse-Glimmer-30B-W8A16`)

:::

Kari を活用して、手元の文書を他の言語に翻訳できます。PDF、ワードはもちろん、Web ページにも対応しています。

- Kari のエクスプローラーでファイルの格納フォルダーを開いて、ファイルをクリックして内容を表示させます。  
なお、例示用のPDFファイルは、内閣府のホームページ「人工知能基本計画」からダウンロードすることができます（令和7年12月23日閣議決定版）。  
URL: https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_20251223.pdf

- 新しいチャットセッションを作成し、インプットボックスに「この文章を英語に翻訳してください。」を入力し、AIに作業を指示します。

![AIに文章翻訳を指示する](@site/docs/current/main/usekari/img/usekari_translateinstruction.png)

- AIが翻訳した結果がセッションウィンドウに出力されるので、結果を確認します。

![AIの翻訳結果を確認する](@site/docs/current/main/usekari/img/usekari_translateresult.png)