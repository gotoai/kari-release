---
sidebar_position: 5
slug: /select-custom-aiprovider
title: Add a custom AI provider
sidebar_label: Add a custom AI provider
description: How to add and use a custom AI provider in Kari.
---

# Adding a custom AI provider to Kari

Even for an AI provider that Kari does not ship with, you can add it as a custom provider as long as its API is OpenAI-compatible, Anthropic-compatible or Ollama-compatible. A local LLM running in your office or on your own PC is registered the same way.

1. On the **Configure your AI Provider** screen, click **Add a custom provider**.

![The Configure your AI Provider screen](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

*Screenshot shown in the original Japanese.*

2. A screen appears asking how you want to configure it. To pick a known provider and have the settings filled in for you, click **Start from a provider template**. To enter everything yourself, click **Configure manually**.

3. Enter the provider's details. Fields marked with `*` are required. This guide uses [OumiGo](https://github.com/gotoai/oumigo), which manages a GPU fleet, as the example backend.

![Adding a custom provider](@site/docs/current/main/img/select_custom_aiprovider_oumigo.png)

*Screenshot shown in the original Japanese.*

  - **Provider type**: choose **OpenAI-compatible**, **Anthropic-compatible** or **Ollama-compatible** to match the shape of the API.
  - **Display name**: the name shown in Kari's interface.
  - **API URL**: the provider's endpoint. For a local LLM this is an address such as `http://192.168.0.100:7012`. For OumiGo, give the Manager's host and router port.
  - **API base path (optional)**: fill this in only to override the default API path. Leave it blank to use the provider's default.
  - **Authentication**: for providers that need an API key, turn on **This provider requires an API key** and enter the key. Local LLMs such as Ollama usually do not need one.
  - **Available models (comma-separated)**: enter the model names to use, separated by commas. With OumiGo, the LLM is configured in advance on the Manager node, so any model name will do — the model name is updated as needed during an OumiGo chat session.

4. Scroll down and you can also set per-model capabilities (**Tool calling**, **Reasoning**, **Attachments**), **Context length (tokens)**, **This provider supports streaming responses** and **Custom headers**. Set these as needed.

5. When you are done, click **Create provider** to save. The provider you added can then be selected from the list on the **Configure your AI Provider** screen.

6. Select the custom provider and model you added, and start working in the chat session.

![Starting a chat on a custom provider](@site/docs/current/main/img/select_custom_aiprovider_first_chat.png)

*Screenshot shown in the original Japanese.*
