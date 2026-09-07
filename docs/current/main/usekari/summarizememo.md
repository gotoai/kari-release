---
sidebar_position: 1
title: 会議メモを要約する
---

# 会議メモを要約する

:::info 検証環境

本ページの手順は、以下の環境で動作を確認しています。

- **Kari**: バージョン 0.5.0 Beta
- **AI プロバイダー**: スタンドアローン OumiGo (バージョン 0.3.0)
- **GPU モデル**: A40
- **LLM**: Meta Muse-Glimmer-30B (GotoAI により量子化済み、Hugging Face リポジトリ: `GotoAI-Inc/Muse-Glimmer-30B-W8A16`)

:::

Kari を活用して、会議のメモ、音声文字起こしのスクリプト、議事録や答弁書などの要約を作成できます。長文でも速やかにアウトプットをします。PDF、ワードはもちろん、Web ページにも対応しています。

- 衆議院トップページで質問答弁の一覧情報ページを開きます。「第221回国会　質問の一覧」のページです。  
URL: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/menu_m.htm

![衆議院質問答弁情報の一覧](@site/docs/current/main/usekari/img/usekari_weblist.png)

- 番号 2 番の「財源に関する質問主意書」の「答弁(HTML)」を開いて、内容を閲覧できることを確認します。  
URL: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/b221002.htm

![衆議院質問答弁情報ページ](@site/docs/current/main/usekari/img/usekari_webpage.png)

- 答弁ページのURLをセッションインプットボックスに入力し、要点をまとめる作業をAIに依頼します。

![AIに要約作業を依頼](@site/docs/current/main/usekari/img/usekari_summarizewebmeetingminuteprompt.png)

- AIの出力がセッションウィンドウに出力されるので、結果を確認します。

![AIの要約結果を確認](@site/docs/current/main/usekari/img/usekari_summarizewebmeetingminuteresult.png)