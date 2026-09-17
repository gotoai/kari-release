---
sidebar_position: 4
slug: /select-predefined-aiprovider
title: 定義済みの AI プロバイダーを選択
sidebar_label: 定義済みの AI プロバイダーを選択
description: 定義済みの AI プロバイダーを選択する手順を説明します。
---

# Kari であらかじめ用意された AI プロバイダーを選択します

Kari には主要な AI プロバイダーがあらかじめ登録されています。API キーをお持ちのプロバイダーを一覧から選び、キーを入力するだけで利用を開始できます。サブスクリプションの Sign In とは異なり、利用料はプロバイダーとのご契約に従って従量課金されます。

1. AI プロバイダー設定画面で、「プロバイダーを選択」のドロップダウンをクリックします。Anthropic、Azure AI Foundry、Databricks、Google Gemini、Hugging Face、OpenAI など、あらかじめ登録されたプロバイダーが一覧で表示されます。一覧はスクロールできるほか、プロバイダー名を入力して絞り込むこともできます。

![プロバイダー一覧](@site/docs/current/main/img/select_predefined_aiprovider.png)

2. 利用したいプロバイダーをクリックすると、そのプロバイダーの設定欄が表示されます。API キーを入力し、「続行」をクリックします。本手順書では、Hugging Face をプロバイダーの例として説明します。

![APIキーの入力](@site/docs/current/main/img/select_predefined_aiprovider_apikey.png)

  - 「*」の付いた項目は必須です。項目名はプロバイダーごとに異なり、Hugging Face の場合は「Hf Token（HF_TOKEN）」です。
  - 入力したキーは、OS のキーチェーンに安全に保存されます。
  - プロバイダーによっては「APIキーをお持ちでないですか？」が表示されます。クリックすると、キーの取得手順が確認できます。

3. プロバイダーが設定されると、設定画面が閉じます。新しい AI チャットセッションを作成します。チャットセッション画面の下部で、インプットボックスの左下のモデルアイコンをクリックすると、現在のモデルと「モデルを変更」メニューが表示されます。

![モデル変更](@site/docs/current/main/img/select_predefined_aiprovider_change_model.png)

4. 「モデルを切り替え」画面が表示されます。上段でプロバイダーを、下段でモデルを選び、利用したいモデルに変更します。

![モデル選択](@site/docs/current/main/img/select_predefined_aiprovider_select_model.png)

5. 一覧にないモデルを使う場合は、モデル一覧の最後にある「一覧にないモデルを入力...」をクリックします。「カスタムモデル名」にモデル名を入力し、「モデルを選択」をクリックします。一覧から選び直す場合は、「モデル一覧に戻る」をクリックします。  

(* Hugging Face で選択できる推論 LLM について Hugging Face のこのページを参照してください。 
https://huggingface.co/docs/inference-providers/guides/first-api-call#step-1-find-a-model-on-the-hub  )  

![カスタムモデル名の入力](@site/docs/current/main/img/select_predefined_aiprovider_input_model_name.png)

6. 選択したプロバイダーとモデルで、チャットセッションで作業を始めます。

![チャット開始](@site/docs/current/main/img/select_predefined_aiprovider_first_chat.png)
