---
sidebar_position: 3
slug: /select-chatgpt-subscription
title: OpenAI ChatGPT サブスクリプションを選択
sidebar_label: OpenAI ChatGPT サブスクリプションを選択
description: OpenAI ChatGPT サブスクリプションを選択する手順を説明します。
---

# Kari で OpenAI ChatGPT サブスクリプションを選択します

Kari で OpenAI ChatGPT のサブスクリプション（Plus / Pro）を利用して Sign In すると、API Key を使わずに Codex エージェントを活用できます。利用できるモデルや機能は、OpenAI が定めるアカウント・プランごとの条件に従います。

---
:::info 利用ポリシー

## OpenAI のポリシーとの関係

Kari は、OpenAI が公開している Codex の組み込み機能とサインインの仕組みを利用しています。現在の実装方式は次のとおりです。

- **OpenAI 公式の Codex エージェントをそのまま実行します。** Kari は Codex を同梱せず、初回利用時に OpenAI が公開している公式パッケージをそのままダウンロードします。Codex は OpenAI が Apache-2.0 ライセンスで公開しているオープンソースのエージェントです。
- **Sign In は OpenAI 自身の画面で完了します。** ブラウザーで開くのは OpenAI の認証ページで、サインインは Codex 自身の `codex login` の仕組みで行われます。サインイン情報はお使いのデバイス上に Codex が保存し、同じ認証設定を使う Codex CLI や IDE 拡張と共有されます。Kari がこの情報を GotoAI のサーバーへ送信・中継することはありません。
- **利用量はユーザー本人のプランに計上されます。** Kari は ChatGPT の利用を代理購入・再販・仲介しません。利用は各ユーザーと OpenAI との契約に基づき、ChatGPT Work や他の Codex クライアントでの利用と利用枠を共有します。
- **チャットは Codex 自身のエージェントで実行されます。** 現在の Kari では、内蔵エージェントがサブスクリプションのサインイン情報を使って OpenAI に接続することはありません。これは Kari の現在の実装方式です。OpenAI は別途、対象のオープンソースアプリやローカルで動作する個人プロジェクト向けに「Sign in with ChatGPT」による連携方式も公開しています。有料アプリやリモートでホストするアプリでその方式を提供する場合は、事前のアクセス申請が必要です。
- **モデル一覧への表示は、利用可能であることを保証しません。** 一覧にはキャッシュされた情報などが含まれる場合があります。実際の利用可否は、アカウント・プラン・クライアントや OpenAI の最新の提供状況に従います。モデルが利用できない場合は、別のモデルを選択してください。

利用枠や残量は OpenAI の利用状況画面で確認してください。Plus / Pro では追加クレジットを購入して利用を継続できる場合があります。

2026年10月18日に確認した OpenAI 公式ドキュメント：

- [Codex の組み込み機能](https://learn.chatgpt.com/docs/app-server)・[認証とサインイン情報の保存](https://learn.chatgpt.com/docs/auth)
- [料金・利用枠](https://learn.chatgpt.com/docs/pricing)・[モデルの提供状況と提供終了](https://learn.chatgpt.com/docs/models)
- [オープンソースアプリ向け Sign in with ChatGPT](https://developers.openai.com/cookbook/articles/sign-in-with-chatgpt)・[モデル一覧とアクセス確認](https://developers.openai.com/siwc/token-sharing-open-source/models-and-inference)
:::

---
:::caution 今後の変更について

ChatGPT サブスクリプションの利用条件と利用枠は OpenAI 社が定めるものであり、**予告なく変更される場合があります**。変更の内容によっては、Kari からのサブスクリプション利用が制限される、利用可能なモデルや利用枠が変わる、利用量の課金方法が変わる、といった影響が生じる可能性があります。これらは OpenAI 社の判断によるもので、当社が事前に予測することも、継続的な利用可能性を保証することもできません。

Kari は API Key によるご利用にも対応しています。サブスクリプションでのご利用が継続できなくなった場合は、設定画面から API Key に切り替えてご利用いただけます。**API Key での利用は ChatGPT サブスクリプションの利用枠には含まれず、OpenAI API の料金に従って別途課金されます。**
:::

---

画面例のプラン名やモデル名は撮影時点のものです。この手順は Plus / Pro を対象としています。

1. AI プロバイダー設定画面から、「OpenAI ChatGPT Subscription」ボタンをクリックします。

![プロバイダー設定画面](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

2. OpenAI ChatGPT サブスクリプションの Sign In 画面が表示されたら、「サインイン...」ボタンをクリックします。初回の場合、Codex エージェントのダウンロードとブラウザーでのサインインについての確認ダイアログが表示されるので、「続行」をクリックします。

![OpenAI ChatGPT サブスクリプション 続行](@site/docs/current/main/img/select_openai_chatgpt_subscription_continue.png)

3. Codex エージェントのダウンロード・インストールが始まります。

![OpenAI ChatGPT サブスクリプション Codex エージェントのダウンロード・インストール](@site/docs/current/main/img/select_openai_chatgpt_subscription_download.png)

4. Codex エージェントのインストールが完了後、ユーザーの Sign In 状態が自動的に確認されます。同じデバイスですでに Sign In になっていて、Kari がそのサインイン情報を確認できる場合、アカウントとプラン情報が表示されます。

5. まだ Sign In になっていない場合、Web ブラウザーの ChatGPT Sign In 画面が自動的に開かれ、Kari はブラウザーでのサインイン完了を待ちます。

![OpenAI ChatGPT サブスクリプション Sign In 未完了](@site/docs/current/main/img/select_openai_chatgpt_subscription_signingin.png)

  - (1) ユーザーがブラウザーの Sign In 画面で、Google・Apple・Microsoft・電話番号のいずれかを選ぶか、サブスクリプションのメールアドレスを入力して「続行」をクリックします。

![OpenAI ChatGPT サブスクリプション ブラウザー Sign In](@site/docs/current/main/img/select_openai_chatgpt_subscription_browser_signin.png)

  - (2) メールアドレスで Sign In する場合、ChatGPT が検証コードをEメールで送信しますので、受け取った検証コードを入力し認証を行います。

![OpenAI ChatGPT サブスクリプション ブラウザー認証](@site/docs/current/main/img/select_openai_chatgpt_subscription_auth.png)

  - (3) ブラウザー Sign In が正常に完了すると、Kari の画面で Sign In 済のアカウントとプラン情報が表示されます。

![OpenAI ChatGPT サブスクリプション Sign In 完了](@site/docs/current/main/img/select_openai_chatgpt_subscription_signedin.png)

  - (4) 「Codex エージェントを使用する」は常にオンで、変更できません。チャットは Codex 自身のエージェントとツールで実行されます。

6. OpenAI ChatGPT Subscription が選択されている状態で、新しい AI チャットセッションを作成します。チャットセッション画面の下部で、インプットボックスの左下のモデルアイコンをクリックすると、「モデルを変更」メニューが表示されます。

![OpenAI ChatGPT サブスクリプションモデル変更](@site/docs/current/main/img/select_openai_chatgpt_subscription_change_model.png)

7. 利用したいモデルを選択して変更します。以前選択したモデルの提供が終了している場合は、現在利用できる別のモデルを選択してください。GPT-5.5 は、ChatGPT サインインで利用する Codex では2026年10月15日午前4時（日本時間）に提供を終了しました。この変更は API Key での利用には適用されません。

![OpenAI ChatGPT サブスクリプションモデル選択](@site/docs/current/main/img/select_openai_chatgpt_subscription_select_model.png)

8. チャットセッションで作業を始めます。

![OpenAI ChatGPT サブスクリプションチャット開始](@site/docs/current/main/img/select_openai_chatgpt_subscription_first_chat.png)
