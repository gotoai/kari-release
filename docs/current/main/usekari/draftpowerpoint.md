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

## インプット情報を確認

- 衆議院トップページで質問答弁の一覧情報ページを開きます。「第221回国会　質問の一覧」のページです。  
URL: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/menu_m.htm

![衆議院質問答弁情報の一覧](@site/docs/current/main/usekari/img/usekari_weblist.png)

- 番号 2 番の「財源に関する質問主意書」の「答弁(HTML)」を開いて、内容を閲覧できることを確認します。  
URL: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/b221002.htm

![衆議院質問答弁情報ページ](@site/docs/current/main/usekari/img/usekari_webpage.png)

## AIに作業を指示

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

## AIの作業結果を確認

- AIが出力したパワーポイントファイルは、エクスプローラーで開いているフォルダー(ここでは `Files`)に保存されます。ファイルを開いて結果を確認します。

![AIのパワーポイント作成結果を確認](@site/docs/current/main/usekari/img/usekari_draftpptxresult.png)

:::caution

使用するLLMにより、生成される資料の構成や体裁が変わることがあります。

:::

## 参考資料

本ページの手順では、例示のために以下の公開資料を利用しています。画面キャプチャは出所を明示した上で引用として掲載しています。AI が出力したパワーポイント資料は、GotoAI が Kari の動作例として生成したものであり、衆議院が作成・公表したものではありません。

- **資料名**: 「第221回国会　質問の一覧」および「衆議院議員緒方林太郎君提出財源に関する質問に対する答弁書」（第221回国会 答弁第二号、令和8年3月3日）
- **提供元**: 衆議院ホームページ（衆議院）
- **URL**: https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/menu_m.htm （質問の一覧）  
  https://www.shugiin.go.jp/internet/itdb_shitsumon.nsf/html/shitsumon/b221002.htm （答弁本文）
- **閲覧日**: 2026年9月8日
- **利用条件**: 衆議院ホームページ「リンク・著作権等について」（[https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/link.html](https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/link.html)）に従い、出所を明示して引用しています。同ページの記載のとおり、内容は予告なく変更・削除される場合があります。

:::note 免責事項

- 本サイトで引用した外部の情報は、Kari の利用例を説明するためのものです。それらの情報の正確性や最新性について、本サイトは保証しません。引用元の内容は予告なく変更・削除されることがあります。
- 本サイトで示した AI の出力は、記載の検証環境で実際に得られたものです。ただし、その出力の正確性や有用性について、本サイトは保証しません。AI の出力は、使用する LLM や設定、実行のたびに変わることがあります。
- AI の出力を業務に用いる場合は、必ず元の資料と照合し、利用者ご自身の責任でご判断ください。
- 画面キャプチャは、掲載時点のバージョンの Kari で取得したものです。お使いのバージョンでは表示が異なる場合があります。
- 引用元の各機関・団体は、本サイトおよび Kari と提携・推奨関係にはありません。

:::
