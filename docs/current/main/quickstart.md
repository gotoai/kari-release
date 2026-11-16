---
sidebar_position: 1
slug: /
title: 5分で使えるKari
sidebar_label: クイックスタート
description: Kari のインストールから最初の AI チャットまでを 5 分で。
---

import TabItem from "@theme/TabItem";
import DownloadTabs, { DownloadCard } from "@site/src/components/DownloadTabs";
import MobileNotice from "@site/src/components/MobileNotice";

# 5分で使えるKari

Kari (かり・日本語「雁」の意味) は、ローカルファイルをAIと一緒に読み、考え、そして作業を進めるアシスタントです。メールひな形作成、文書要約、資料翻訳、スライド作成、データ分析・可視化、Web情報取得、Browser処理自動化など、すべての作業を一つのツールに統合する、ユーザー中心のAIエージェントアプリケーションです。

このチュートリアルでは、次の手順を順番に進めます。

- ✅ Kari をインストールする
- ✅ AI サブスクリプション、またはプロバイダーを設定する
- ✅ 作業フォルダーを選ぶ
- ✅ AI セッションを新規作成する
- ✅ AI チャット・作業を始める

それでは始めましょう 🚀

## ウェビナー開催（12月2日）

Kari の使い方を 60 分のデモで紹介する無料ウェビナーを、Microsoft Teams で開催します。要約・翻訳からブラウザー操作の自動化、ノーコードのデータ分析、無人運営の業務窓口「エージェントデスク」の立ち上げ方までをご覧いただけます。

![ウェビナー告知：「Claude・ChatGPTのサブスクでも使えるAIエージェント『Kari』で、業務効率化を始める」12月2日（水）13:00〜14:00、Teams 開催・参加無料、登壇者 党 聡維（GotoAI株式会社 代表取締役CEO）](@site/docs/current/main/img/quickstart_webinar_20261202.png)

- 日時：2026年12月2日（水）13:00〜14:00（60分）
- 形式：オンライン（Microsoft Teams、アカウント不要）
- 参加費：無料（事前登録制）
- 登壇者：党 聡維（GotoAI株式会社 代表取締役CEO）
- 言語：日本語

お申し込みは[Teams 登録ページ](https://events.teams.microsoft.com/event/5b93ea6b-661c-4624-948e-7f7ee50e8290@a6743a45-2f97-4190-bf9d-feff48352aa4?source=copyLinkOneEventsShareDialog)から。イベントの詳細は[PR TIMES のプレスリリース](https://prtimes.jp/main/html/rd/p/000000006.000190819.html)をご覧ください。

---

## Kariをインストールする

---

お使いの環境に合わせて、以下からダウンロードしてください。

<MobileNotice />

<DownloadTabs>
  <TabItem value="windows" label="Windows">
    <DownloadCard platform="windows" />
 
    1. ダウンロードしたインストーラー（KariSetup-&lt;バージョン&gt;-x64.exe）を実行します。
    2. インストーラーの指示に従ってインストールし、スタートメニューまたはデスクトップから Kari を起動します。

    ![Windows のインストーラー画面](@site/docs/current/main/img/quickstart_windowsinstallstart.png)

    ![Windows のインストーラー画面](@site/docs/current/main/img/quickstart_windowsinstallprogress.png)

    ![Windows のインストーラー画面](@site/docs/current/main/img/quickstart_windowsinstallcomplete.png)

  </TabItem>
  <TabItem value="macos" label="macOS">
    <DownloadCard platform="macos" />

    1. お使いの Mac に合わせて Apple Silicon 版または Intel 版の DMG をダウンロードして開き、Kari を「アプリケーション」フォルダーへドラッグします。
    2. 「アプリケーション」フォルダーから Kari を起動します。

    ![macOS の DMG 画面](@site/docs/current/main/img/quickstart_macosdmginstall.png)
  </TabItem>
  <TabItem value="linux" label="Linux">
    <DownloadCard platform="linux" />

    1. 「.deb」ファイルをローカルフォルダーへダウンロードします。
    2. sudoの実行権限でインストールを実施します。
    
    ```bash
    sudo dpkg -i kari_<version>_amd64.deb
    ```

    3. Ubuntuの場合は、「Applications / Programming / Kari」のパスからKariを起動します。コマンドラインの場合は、「kari」を実行してアプリケーションを起動します。

    ```
    kari
    ```
    {/* TODO: 画像を挿入 ![Linux での起動画面](@site/docs/current/main/img/quickstart_install_linux.png) */}
  </TabItem>
</DownloadTabs>

---

## AI サブスクリプション、またはプロバイダーを設定する

初期画面で「AIプロバイダーを設定」ボタンをクリックします。

![プロバイダー設定ボタン](@site/docs/current/main/img/quickstart_aiprovider.png)

「AIプロバイダーを設定」のポップアップ画面が表示されます。ここで AI サブスクリプション、またはプロバイダーを選択します。

- AI サブスクリプションを選択します  
  現在バージョンの Kari は以下の AI サブスクリプションを選択できます：　　
  - [Anthropic Claude (Pro / Max)](select_anthropic_claude_subscriptoin.md)
  - [OpenAI ChatGPT (Plus / Pro)](./select_openai_chatgpt_subscription.md)
  
- [事前定義済みの70以上の AI プロバイダー](./select_predefined_aiprovider.md)から選択します  

- [カスタムプロバイダー](./select_custom_aiprovider.md)を追加します  

- この端末上でモデルを動かす場合は「ローカルモデルを使用」を選びます  

![プロバイダー設定画面](@site/docs/current/main/img/quickstart_aiprovider_settings.png)


## 作業フォルダーを選ぶ

左のナビパネルの「エクスプローラー」を右クリックします。表示されたメニューの「フォルダーを開く…」を選び、作業フォルダーを指定します。

![フォルダーを開くメニュー](@site/docs/current/main/img/quickstart_explorer_open.png)

作業フォルダーを選ぶと、フォルダーの配下のファイル一覧が表示されます。ファイル名をクリックすると、ファイルの内容が画面中央のビューに表示されます。

![ファイルの内容をビューで表示](@site/docs/current/main/img/quickstart_file_view.png)

## AIセッションを新規作成する

右のセッションパネル上部のバーにある「＋」ボタンをクリックすると、新しいAIチャットセッションを作成します。作業が複数ある場合は、それぞれに対してセッションを開いて対応します。

![新規セッションボタン](@site/docs/current/main/img/quickstart_new_session_button.png)

## AIチャット・作業を始める

チャットボックスでAIに作業依頼をテキストで入力すると、AIが依頼どおりに作業を進めます。作業の状況を確認しながら、AIに追加依頼や変更要求を指示します。

![AIチャット](@site/docs/current/main/img/quickstart_aichat.png)

## ネクストステップ

次に、さまざまな具体例を示しながら、Kariを活用して作業を効率化するケースを紹介します。
