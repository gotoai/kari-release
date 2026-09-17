---
sidebar_position: 3
slug: /select-chatgpt-subscription
title: OpenAI ChatGPT サブスクリプションを選択
sidebar_label: OpenAI ChatGPT サブスクリプションを選択
description: OpenAI ChatGPT サブスクリプションを選択する手順を説明します。
---

# Kari で OpenAI ChatGPT サブスクリプションを選択します

Kari で OpenAI ChatGPT のサブスクリプション（Free / Go / Plus / Pro）を利用して Sign In すると、API Key を使わずに AI エージェントを活用できます。

---
:::info 利用ポリシー

## OpenAI のポリシーとの関係

Kari での ChatGPT サブスクリプションの利用は、OpenAI が公開している方針に沿った方式で実装されています。要点は次のとおりです。

- **OpenAI 公式の Codex エージェントをそのまま実行します。** Kari は Codex を同梱せず、初回利用時に OpenAI が公開している公式パッケージをそのままダウンロードします。Codex は OpenAI が Apache-2.0 ライセンスで公開しているオープンソースのエージェントです。
- **Sign In は OpenAI 自身の画面で完了します。** ブラウザーで開くのは OpenAI の認証ページで、サインインは Codex 自身の `codex login` の仕組みで行われます。サインイン情報はお使いのデバイス上に Codex が保存し、同じデバイスの Codex CLI や IDE 拡張と共有されます。Kari はこの情報を外部に送信・中継しません。
- **利用量はユーザー本人のプランに計上されます。** Kari は ChatGPT の利用を代理購入・再販・仲介しません。利用は各ユーザーと OpenAI との契約に基づきます。利用できるモデルも、OpenAI がそのアカウントに許可しているものだけが表示されます。
- **エージェントは 2 通りから選べます。** 「Codex エージェントを使用する」がオン（既定・推奨）のときは、チャットは Codex 自身のエージェントとツールで実行されます。オフのときは Kari の内蔵エージェントが、デバイス上で Codex が保存したサインイン情報を使って OpenAI に接続します。

OpenAI は、ChatGPT アカウントを OpenCode や pi などのサードパーティ製エージェント（ハーネス）から利用することを公に認めており、「Codex for Open Source」プログラムでもそれらのツールでの利用を支援しています。一方で、ChatGPT の利用規約にはこの点を明記した条項はなく、OpenAI の公開方針は変更されることがあります。Kari での利用にあたっても、OpenAI の最新の利用規約が適用されます。詳細は OpenAI の [Codex for Open Source](https://developers.openai.com/community/codex-for-oss) を参照してください。
:::

---

1. AI プロバイダー設定画面から、「OpenAI ChatGPT Subscription（Free / Go / Plus / Pro）」ボタンをクリックします。

![プロバイダー設定画面](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

2. OpenAI ChatGPT サブスクリプションの Sign In 画面が表示されたら、「サインイン...」ボタンをクリックします。初回の場合、Codex エージェントのダウンロードとブラウザーでのサインインについての確認ダイアログが表示されるので、「続行」をクリックします。

![OpenAI ChatGPT サブスクリプション 続行](@site/docs/current/main/img/select_openai_chatgpt_subscription_continue.png)

3. Codex エージェントのダウンロード・インストールが始まります。

![OpenAI ChatGPT サブスクリプション Codex エージェントのダウンロード・インストール](@site/docs/current/main/img/select_openai_chatgpt_subscription_download.png)

4. Codex エージェントのインストールが完了後、ユーザーの Sign In 状態が自動的に確認されます。同じデバイスですでに Sign In になっている場合、アカウントとプラン情報が表示されます。

5. まだ Sign In になっていない場合、Web ブラウザーの ChatGPT Sign In 画面が自動的に開かれ、Kari はブラウザーでのサインイン完了を待ちます。

![OpenAI ChatGPT サブスクリプション Sign In 未完了](@site/docs/current/main/img/select_openai_chatgpt_subscription_signingin.png)

  - (1) ユーザーがブラウザーの Sign In 画面で、Google・Apple・Microsoft・電話番号のいずれかを選ぶか、サブスクリプションのメールアドレスを入力して「続行」をクリックします。

![OpenAI ChatGPT サブスクリプション ブラウザー Sign In](@site/docs/current/main/img/select_openai_chatgpt_subscription_browser_signin.png)

  - (2) メールアドレスで Sign In する場合、ChatGPT が検証コードをEメールで送信しますので、受け取った検証コードを入力し認証を行います。

![OpenAI ChatGPT サブスクリプション ブラウザー認証](@site/docs/current/main/img/select_openai_chatgpt_subscription_auth.png)

  - (3) ブラウザー Sign In が正常に完了すると、Kari の画面で Sign In 済のアカウントとプラン情報が表示されます。

![OpenAI ChatGPT サブスクリプション Sign In 完了](@site/docs/current/main/img/select_openai_chatgpt_subscription_signedin.png)

  - (4) 「Codex エージェントを使用する」をオンにすると、チャットは Codex 自身のエージェントとツールで実行されます（* お勧めです）。オフにすると、Kari の内蔵エージェントとツールで実行されます。

6. OpenAI ChatGPT Subscription が選択されている状態で、新しい AI チャットセッションを作成します。チャットセッション画面の下部で、インプットボックスの左下のモデルアイコンをクリックすると、「モデルを変更」メニューが表示されます。

![OpenAI ChatGPT サブスクリプションモデル変更](@site/docs/current/main/img/select_openai_chatgpt_subscription_change_model.png)

7. 利用したいモデルを選択して変更します。

![OpenAI ChatGPT サブスクリプションモデル選択](@site/docs/current/main/img/select_openai_chatgpt_subscription_select_model.png)

8. チャットセッションで作業を始めます。

![OpenAI ChatGPT サブスクリプションチャット開始](@site/docs/current/main/img/select_openai_chatgpt_subscription_first_chat.png)
