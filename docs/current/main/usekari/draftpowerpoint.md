---
sidebar_position: 3
title: パワーポイントのドラフトを作成する
---

# パワーポイントのドラフトを作成する

:::info 検証環境

本ページの手順は、以下の環境で動作を確認しています。

- **Kari**: バージョン 0.5.0 Beta
- **AI プロバイダー**: スタンドアローン OumiGo (バージョン 0.3.0)
- **GPU モデル**: A40
- **LLM**: Google Gemma 4 31B IT (Google により量子化済み、Hugging Face リポジトリ: `google/gemma-4-31B-it-qat-w4a16-ct`)

:::

Kari を活用して、パワーポイントのドラフトを作成できます。PPTXフォーマットのファイルを出力します。

- 衆議院トップページで質問答弁の一覧情報ページを開きます。「第221回国会　質問の一覧」のページです。  
URL: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/menu_m.htm

![衆議院質問答弁情報の一覧](@site/docs/current/main/usekari/img/usekari_weblist.png)

- 番号 2 番の「財源に関する質問主意書」の「答弁(HTML)」を開いて、内容を閲覧できることを確認します。  
URL: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/b221002.htm

![衆議院質問答弁情報ページ](@site/docs/current/main/usekari/img/usekari_webpage.png)

- 答弁ページのURLをセッションインプットボックスに入力し、骨子のパワーポイント資料の作成をAIに依頼します。AIへのプロンプト例を以下に示します。

> このページ、「 https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/b221002.htm 」の答弁内容を構造化し、答弁の骨子資料のパワーポイントを作成してファイル「答弁骨子.pptx」として保存してください。
> 
> なお、情報を最大3階層、ヘッド1・ヘッド2・本文のレベルで整理し、フォントサイズについては、
> 
> ・資料のタイトルは36pt  
> ・メッセージラインは28pt  
> ・ヘッド1は20pt  
> ・ヘッド2は16pt  
> ・本文は12pt  
>
> にしてください。

![AIにパワーポイント作成を依頼](@site/docs/current/main/usekari/img/usekari_draftpptxinstruction.png)

- AIが出力したパワーポイントファイルは、エクスプローラーで開いているフォルダー(ここでは `Files`)に保存されます。ファイルを開いて結果を確認します。

![AIのパワーポイント作成結果を確認](@site/docs/current/main/usekari/img/usekari_draftpptxresult.png)

:::caution

使用するLLMにより、生成される資料の構成や体裁が変わることがあります。

:::