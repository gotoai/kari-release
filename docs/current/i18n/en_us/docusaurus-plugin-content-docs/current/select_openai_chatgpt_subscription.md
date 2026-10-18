---
sidebar_position: 3
slug: /select-chatgpt-subscription
title: Choose the OpenAI ChatGPT subscription
sidebar_label: Choose the OpenAI ChatGPT subscription
description: How to sign in to Kari with an OpenAI ChatGPT subscription.
---

# Choosing the OpenAI ChatGPT subscription in Kari

Sign in to Kari with an OpenAI ChatGPT subscription (Plus / Pro) and you can put the Codex agent to work without an API key. Available models and features depend on OpenAI's conditions for your account and plan.

---
:::info Usage policy

## How this relates to OpenAI's policy

Kari uses OpenAI's published mechanisms for embedding Codex and signing in. Its current implementation works as follows:

- **Kari runs OpenAI's official Codex agent as it is.** Kari does not bundle Codex; the first time you use it, Kari downloads the official package published by OpenAI, unmodified. Codex is an open-source agent that OpenAI publishes under the Apache-2.0 licence.
- **Sign-in completes on OpenAI's own pages.** What opens in the browser is OpenAI's authentication page, and the sign-in runs through Codex's own `codex login` mechanism. Codex stores the sign-in information on your device and shares it with the Codex CLI and IDE extensions that use the same authentication configuration. Kari does not transmit or relay that information to GotoAI's servers.
- **Usage counts against your own plan.** Kari does not buy, resell, or broker ChatGPT usage on your behalf. Use is governed by your own contract with OpenAI and shares your allowance with ChatGPT Work and other Codex clients.
- **Chat runs on Codex's own agent.** In the current version of Kari, its built-in agent does not use subscription sign-in information to connect to OpenAI. This is Kari's current implementation choice. OpenAI also publishes a separate Sign in with ChatGPT integration for eligible open-source apps and personal projects that run locally. Paid or remotely hosted apps must request access before offering that integration.
- **A model appearing in the list does not guarantee access.** The list may include cached information. Actual access depends on your account, plan, client, and OpenAI's current availability. If a model is unavailable, select another model.

Check OpenAI's usage dashboard for your limits and remaining allowance. Plus / Pro users may be able to purchase additional credits to continue working.

OpenAI's official documentation, checked on October 18, 2026:

- [Embedding Codex](https://learn.chatgpt.com/docs/app-server) and [authentication and credential storage](https://learn.chatgpt.com/docs/auth)
- [Pricing and usage limits](https://learn.chatgpt.com/docs/pricing) and [model availability and retirements](https://learn.chatgpt.com/docs/models)
- [Sign in with ChatGPT for open-source apps](https://developers.openai.com/cookbook/articles/sign-in-with-chatgpt) and [model discovery and access checks](https://developers.openai.com/siwc/token-sharing-open-source/models-and-inference)
:::

---
:::caution About future changes

The terms and usage limits for a ChatGPT subscription are set by OpenAI and **may change without notice**. Depending on the change, using your subscription from Kari may become restricted, the available models or limits may change, or usage may be billed differently. These are OpenAI's decisions: we cannot anticipate them, and we cannot guarantee continued availability.

Kari also works with an API key. If subscription use stops being available to you, you can switch to an API key in settings. **API-key usage is billed separately at OpenAI API rates and is not included in your ChatGPT subscription allowance.**
:::

---

Plan and model names in the screenshots reflect the time they were taken. These instructions cover Plus / Pro.

1. On the **Configure your AI Provider** screen, click the **OpenAI ChatGPT Subscription** button.

![The Configure your AI Provider screen](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

*Screenshot shown in the original Japanese.*

2. When the OpenAI ChatGPT subscription sign-in screen appears, click the **Sign in…** button. The first time, a dialog asks you to confirm the download of the Codex agent and the browser sign-in; click **Continue**.

![Continuing to the download of the Codex agent](@site/docs/current/main/img/select_openai_chatgpt_subscription_continue.png)

*Screenshot shown in the original Japanese.*

3. The download and installation of the Codex agent begins.

![Downloading and installing the Codex agent](@site/docs/current/main/img/select_openai_chatgpt_subscription_download.png)

*Screenshot shown in the original Japanese.*

4. Once the Codex agent is installed, Kari checks your sign-in status automatically. If you are already signed in on this device and Kari can detect that sign-in, your account and plan details are shown.

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

  - (4) **Use the Codex agent** is always on and cannot be changed. Chat runs on Codex's own agent and tools.

6. With the OpenAI ChatGPT Subscription selected, create a new AI chat session. At the bottom of the session window, click the model icon to the lower left of the input box and the **Change model** menu appears.

![Changing the model for the OpenAI ChatGPT subscription](@site/docs/current/main/img/select_openai_chatgpt_subscription_change_model.png)

*Screenshot shown in the original Japanese.*

7. Select the model you want to use. If a previously selected model has retired, choose another model currently available to your account. GPT-5.5 retired from Codex with ChatGPT sign-in on October 15, 2026, at 4:00 a.m. Japan time (October 14 at 19:00 UTC). This change does not apply to API-key usage.

![Selecting a model for the OpenAI ChatGPT subscription](@site/docs/current/main/img/select_openai_chatgpt_subscription_select_model.png)

*Screenshot shown in the original Japanese.*

8. Start working in the chat session.

![Starting a chat on the OpenAI ChatGPT subscription](@site/docs/current/main/img/select_openai_chatgpt_subscription_first_chat.png)

*Screenshot shown in the original Japanese.*
