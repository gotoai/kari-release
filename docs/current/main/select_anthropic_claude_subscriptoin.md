---
sidebar_position: 2
slug: /select-claude-subscription
title: Anthropic Claude サブスクリプションを選択
sidebar_label: Anthropic Claude サブスクリプションを選択
description: Anthropic Claude サブスクリプションを選択する手順を説明します。
---

# Kari で Anthropic Claude サブスクリプションを選択します

Kari で Anthropic Claude の Pro / Max サブスクリプションを利用して Sign In すると、API Key を使わずに AI エージェントを活用できます。

---
:::info 利用ポリシー

## Anthropic のポリシーとの関係

Kari での Claude サブスクリプションの利用は、Anthropic が定める利用条件に沿った方式で実装されています。要点は次のとおりです。

- **Anthropic 公式の Claude Code エージェントをそのまま実行します。** Kari は Claude Code を同梱せず、初回利用時に Anthropic が公開している公式パッケージをそのままダウンロードします。バイナリの改変や、認証方式の制限は行いません。
- **Sign In は Anthropic 自身の画面で完了します。** ブラウザーで開くのは Anthropic の認証ページです。Kari はアカウントの認証情報やトークンを受け取らず、保存も中継もしません。サインイン状態の確認は Claude Code に問い合わせて行います。
- **利用量はユーザー本人のプランに計上されます。** Kari は Claude の利用を代理購入・再販・仲介しません。利用は各ユーザーと Anthropic との契約に基づき、Pro / Max の利用上限は Claude アプリや Claude Code と共通です。
- **チャットは Claude Code 自身のエージェントで実行されます。** Kari の内蔵エージェントがサブスクリプションの認証情報を使って Anthropic に接続することはありません。設定画面の「Claude Code エージェントを使用する」が常にオンなのはこのためです。

Anthropic は、第三者アプリが Claude アカウントでのログインを提供したり、Pro / Max プランの認証情報を通じてリクエストを中継したりすることを認めていません。一方で、プラットフォームが Claude Code を改変せずに提供し、ユーザー本人がそこに自分のサブスクリプションで Sign In することは認めています。Kari は後者の方式です。詳細は Anthropic の [Claude Code: Legal and compliance](https://code.claude.com/docs/en/legal-and-compliance) を参照してください。なお、Anthropic の条件は変更されることがあります。Kari での利用にあたっても、Anthropic の最新の利用規約が適用されます。
:::

---

1. AI プロバイダー設定画面から、「Anthropic Claude Subscription (Pro / Max)」ボタンをクリックします。

![プロバイダー設定画面](@site/docs/current/main/img/quickstart_aiprovider_settings.png)


2. Anthropic Claude サブスクリプションの Sign In 画面が表示されたら、「サインイン...」ボタンをクリックします。

![Anthropic Claude サブスクリプション Sign In 画面](@site/docs/current/main/img/select_anthropic_claude_subscription.png)

3. 初回の場合、Claude AI エージェントが動くためのClaude公式ライブラリをダウンロード・インストールするので、「続行」をクリックします。

![Anthropic Claude サブスクリプション 続行](@site/docs/current/main/img/select_anthropic_claude_subscription_continue.png)

4. Claude公式ライブラリのダウンロード・インストールが始まります。

![Anthropic Claude 公式ライブラリのダウンロード・インストール](@site/docs/current/main/img/select_anthropic_claude_subscription_download.png)

5. Claude公式ライブラリのインストールが完了後、ユーザーの Sign In 状態が自動的に確認されます。同じデバイスですでに Sign In になっている場合、アカウントとサブスクリプション情報が表示されます。

![Anthropic Claude サブスクリプション Sign In 済](@site/docs/current/main/img/select_anthropic_claude_subscription_signedin.png)

6. まだ Sign In になっていない場合、Web ブラウザーの Claude Sign In 画面が自動的に開かれ、ユーザーが Sign In を実施します。

![Anthropic Claude サブスクリプション Sign In 未完了](@site/docs/current/main/img/select_anthropic_claude_subscription_signingin.png)

  - (1) ユーザーがブラウザーの Sign In 画面で、サブスクリプションのアカウントを入力します。

![Anthropic Claude サブスクリプション ブラウザー log in](@site/docs/current/main/img/select_anthropic_claude_subscription_browser_login.png)

  - (2) Claude が認証コードをEメールで送信しますので、受け取った認証コードを入力し認証を行います。

![Anthropic Claude サブスクリプション ブラウザー認証](@site/docs/current/main/img/select_anthropic_claude_subscription_browser_auth.png)

  - (3) ブラウザーで権限付与の画面を確認し、付与するボタンをクリックします。

![Anthropic Claude サブスクリプション 権限付与](@site/docs/current/main/img/select_anthropic_claude_subscription_authorize.png)

  - (4) ブラウザー Sign In が正常に完了すると、Kari の画面で Sign In 済のアカウントとサブスクリプション情報が表示されます。

![Anthropic Claude サブスクリプション Sign In 完了](@site/docs/current/main/img/select_anthropic_claude_subscription_signedin2.png)

7. Anthropic Claude Subscription が選択されている状態で、新しい AI チャットセッションを作成します。チャットセッション画面の下部で、インプットボックスの左下のモデルアイコンをクリックすると、「モデルを変更」メニューが表示されます。

![Anthropic Claude サブスクリプションモデル変更](@site/docs/current/main/img/select_anthropic_claude_subscription_change_model.png)

8. 利用したいモデルを選択して変更します。

![Anthropic Claude サブスクリプションモデル選択](@site/docs/current/main/img/select_anthropic_claude_subscription_select_model.png)

9. チャットセッションで作業を始めます。

![Anthropic Claude サブスクリプションチャット開始](@site/docs/current/main/img/select_anthropic_claude_subscription_first_chat.png)