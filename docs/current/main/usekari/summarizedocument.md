---
sidebar_position: 2
title: PDF・ワード文書を要約する
---

# PDF・ワード文書を要約する

:::info 検証環境

本ページの手順は、以下の環境で動作を確認しています。

- **Kari**: バージョン 0.5.0 Beta
- **AI プロバイダー**: スタンドアローン OumiGo (バージョン 0.3.0)
- **GPU モデル**: A40
- **LLM**: Meta Muse-Glimmer-30B (GotoAI により量子化済み、Hugging Face リポジトリ: `GotoAI-Inc/Muse-Glimmer-30B-W8A16`)

:::

Kari を活用して、手元の文書の要約を作成できます。PDF、ワードはもちろん、Web ページにも対応しています。

- Kari のエクスプローラーでファイルの格納フォルダーを開いて、ファイルをクリックして内容を表示させます。  
なお、例示用のPDFファイルは、内閣府のホームページ「人工知能基本計画」からダウンロードすることができます（令和7年12月23日閣議決定版）。  
URL: https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_20251223.pdf

- 新しいチャットセッションを作成し、インプットボックスに「この文章の要約を作成してください。」を入力し、AIに作業を指示します。

![文章の要約をAIで作成する](@site/docs/current/main/usekari/img/usekari_summarizeinstruction.png)

- AIは指示を受けて文章の要約を作成して、セッションのウィンドウで出力します。

![AIが作成した文章の要約](@site/docs/current/main/usekari/img/usekari_summarizeresult.png)

- 特定の側面などで追加質問をAIに問い合わせすることもできます。

![追加質問対応](@site/docs/current/main/usekari/img/usekari_summarizemorequestion.png)