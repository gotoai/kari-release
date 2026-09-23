---
sidebar_position: 4
slug: /select-predefined-aiprovider
title: 定義済みの AI プロバイダーを選択
sidebar_label: 定義済みの AI プロバイダーを選択
description: 定義済みの AI プロバイダーを選択する手順を説明します。
---

# Kari であらかじめ用意された AI プロバイダーを選択します

Kari には主要な AI プロバイダーがあらかじめ登録されています。API キーをお持ちのプロバイダーを一覧から選び、キーを入力するだけで利用を開始できます。サブスクリプションの Sign In とは異なり、利用料はプロバイダーとのご契約に従って従量課金されます。

1. AI プロバイダー設定画面で、「プロバイダーを選択」のドロップダウンをクリックします。Anthropic、Azure AI Foundry、Databricks、Google Gemini、Hugging Face、OpenAI など、あらかじめ登録されたプロバイダーが一覧で表示されます。一覧はスクロールできるほか、プロバイダー名を入力して絞り込むこともできます。登録されているプロバイダーの全一覧は、本ページ末尾の「[定義済み AI プロバイダー一覧](#predefined-provider-list)」を参照してください。

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

## 定義済み AI プロバイダー一覧 {#predefined-provider-list}

現在の Kari に登録されている定義済み AI プロバイダーは次のとおりです（アルファベット順）。一覧は Kari のバージョンにより変わることがあります。

- Alibaba (Qwen)
- Amazon Bedrock
- Amazon SageMaker TGI
- Amp
- Anthropic
- Anthropic Claude Subscription
- Atomic Chat
- Avian
- Azure AI Foundry
- Azure OpenAI
- Celeris
- Cerebras
- Cursor Agent
- Databricks
- Databricks AI Gateway
- DeepSeek
- EmpirioLabs AI
- Fireworks AI
- Friendli AI
- FuturMix
- GCP Vertex AI
- Gemini
- GitHub Copilot
- GitHub Copilot CLI (ACP)
- Google Gemini (API Key)
- Groq
- Hugging Face
- iFlytek Astron MaaS
- iFlytek Spark
- Inception
- Kimi Code
- LiteLLM
- Llama Swap
- LM Studio
- Local Inference
- Meta
- MiniMax
- Mistral AI
- Moonshot
- NanoGPT
- NEAR AI Cloud
- Novita AI
- NVIDIA
- Ollama
- Ollama Cloud
- oMLX
- OpenAI
- OpenAI ChatGPT Subscription
- OpenCode Go
- OpenRouter
- OrcaRouter
- OVHcloud
- Perplexity
- Pi
- Routstr
- Sakana AI
- SaladCloud AI Gateway
- Scaleway
- Snowflake
- Tensorix
- Tetrate Agent Router Service
- Together AI
- Venice.ai
- Vercel AI Gateway
- VMware Tanzu Platform
- xAI
- xAI (SuperGrok Subscription)
- Z.AI
- Zhipu AI

補足:

- 「Anthropic Claude Subscription」と「OpenAI ChatGPT Subscription」は、同じ画面上部の「AI サブスクリプションを使う」からも選択できます。サブスクリプションでの利用については別の手順書を参照してください。
- 「Ollama」「LM Studio」「Llama Swap」「oMLX」「Atomic Chat」「Local Inference」は、ローカルで動作するモデルを利用するための項目で、API キーは不要です。
- 「Amp」「Cursor Agent」「GitHub Copilot CLI (ACP)」「Pi」は、各社のエージェント CLI を Kari から利用するための項目で、対応する CLI のインストールが別途必要です。
