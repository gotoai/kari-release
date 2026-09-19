---
sidebar_position: 3
slug: /select-chatgpt-subscription
title: Choose the OpenAI ChatGPT subscription
sidebar_label: Choose the OpenAI ChatGPT subscription
description: How to sign in to Kari with an OpenAI ChatGPT subscription.
---

# Choosing the OpenAI ChatGPT subscription in Kari

Sign in to Kari with an OpenAI ChatGPT subscription (Free / Go / Plus / Pro) and you can put the AI agent to work without an API key.

---
:::info Usage policy

## How this relates to OpenAI's policy

The way Kari uses a ChatGPT subscription is built to follow the approach OpenAI has published. In short:

- **Kari runs OpenAI's official Codex agent as it is.** Kari does not bundle Codex; the first time you use it, Kari downloads the official package published by OpenAI, unmodified. Codex is an open-source agent that OpenAI publishes under the Apache-2.0 licence.
- **Sign-in completes on OpenAI's own pages.** What opens in the browser is OpenAI's authentication page, and the sign-in runs through Codex's own `codex login` mechanism. Codex stores the sign-in information on your device and shares it with the Codex CLI and IDE extensions on the same device. Kari does not transmit or relay that information anywhere.
- **Usage counts against your own plan.** Kari does not buy, resell, or broker ChatGPT usage on your behalf. Use is governed by your own contract with OpenAI, and only the models OpenAI allows for your account are shown.
- **You can choose between two agents.** When **Use the Codex agent** is on (the default, and what we recommend), chat runs on Codex's own agent and tools. When it is off, Kari's built-in agent connects to OpenAI using the sign-in information Codex stored on the device.

OpenAI publicly permits ChatGPT accounts to be used from third-party agents (harnesses) such as OpenCode and pi, and its "Codex for Open Source" programme supports use through those tools. That said, the ChatGPT terms of service contain no clause stating this explicitly, and OpenAI's published position may change. OpenAI's current terms of service apply to your use through Kari as well. For details, see OpenAI's [Codex for Open Source](https://developers.openai.com/community/codex-for-oss).
:::

---

1. On the **Configure your AI Provider** screen, click the **OpenAI ChatGPT Subscription (Free / Go / Plus / Pro)** button.

![The Configure your AI Provider screen](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

*Screenshot shown in the original Japanese.*

2. When the OpenAI ChatGPT subscription sign-in screen appears, click the **Sign in…** button. The first time, a dialog asks you to confirm the download of the Codex agent and the browser sign-in; click **Continue**.

![Continuing to the download of the Codex agent](@site/docs/current/main/img/select_openai_chatgpt_subscription_continue.png)

*Screenshot shown in the original Japanese.*

3. The download and installation of the Codex agent begins.

![Downloading and installing the Codex agent](@site/docs/current/main/img/select_openai_chatgpt_subscription_download.png)

*Screenshot shown in the original Japanese.*

4. Once the Codex agent is installed, Kari checks your sign-in status automatically. If you are already signed in on this device, your account and plan details are shown.

5. If you are not signed in yet, the ChatGPT sign-in page opens in your web browser and Kari waits for the browser sign-in to complete.

![Sign-in to the OpenAI ChatGPT subscription not yet complete](@site/docs/current/main/img/select_openai_chatgpt_subscription_signingin.png)

*Screenshot shown in the original Japanese.*

  - (1) On the browser's sign-in page, choose Google, Apple, Microsoft or phone number, or enter the email address for your subscription and click **Continue**.

![Signing in to ChatGPT in the browser](@site/docs/current/main/img/select_openai_chatgpt_subscription_browser_signin.png)

*Screenshot shown in the original Japanese.*

  - (2) If you sign in with an email address, ChatGPT emails you a verification code. Enter the code you receive to authenticate.

![Authenticating in the browser](@site/docs/current/main/img/select_openai_chatgpt_subscription_auth.png)

*Screenshot shown in the original Japanese.*

  - (3) When the browser sign-in completes successfully, Kari shows the signed-in account and its plan details.

![Sign-in to the OpenAI ChatGPT subscription complete](@site/docs/current/main/img/select_openai_chatgpt_subscription_signedin.png)

*Screenshot shown in the original Japanese.*

  - (4) Turn **Use the Codex agent** on and chat runs on Codex's own agent and tools (recommended). Turn it off and chat runs on Kari's built-in agent and tools.

6. With the OpenAI ChatGPT Subscription selected, create a new AI chat session. At the bottom of the session window, click the model icon to the lower left of the input box and the **Change model** menu appears.

![Changing the model for the OpenAI ChatGPT subscription](@site/docs/current/main/img/select_openai_chatgpt_subscription_change_model.png)

*Screenshot shown in the original Japanese.*

7. Select the model you want to use.

![Selecting a model for the OpenAI ChatGPT subscription](@site/docs/current/main/img/select_openai_chatgpt_subscription_select_model.png)

*Screenshot shown in the original Japanese.*

8. Start working in the chat session.

![Starting a chat on the OpenAI ChatGPT subscription](@site/docs/current/main/img/select_openai_chatgpt_subscription_first_chat.png)

*Screenshot shown in the original Japanese.*
