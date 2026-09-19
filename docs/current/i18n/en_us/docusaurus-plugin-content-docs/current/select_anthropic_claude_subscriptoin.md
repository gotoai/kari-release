---
sidebar_position: 2
slug: /select-claude-subscription
title: Choose the Anthropic Claude subscription
sidebar_label: Choose the Anthropic Claude subscription
description: How to sign in to Kari with an Anthropic Claude Pro or Max subscription.
---

# Choosing the Anthropic Claude subscription in Kari

Sign in to Kari with an Anthropic Claude Pro or Max subscription and you can put the AI agent to work without an API key.

---
:::info Usage policy

## How this relates to Anthropic's policy

The way Kari uses a Claude subscription is built to follow the terms Anthropic sets. In short:

- **Kari runs Anthropic's official Claude Code agent as it is.** Kari does not bundle Claude Code; the first time you use it, Kari downloads the official package published by Anthropic, unmodified. The binary is not altered and the authentication method is not restricted.
- **Sign-in completes on Anthropic's own pages.** What opens in the browser is Anthropic's authentication page. Kari neither receives nor stores nor relays your account credentials or tokens. To check whether you are signed in, Kari asks Claude Code.
- **Usage counts against your own plan.** Kari does not buy, resell, or broker Claude usage on your behalf. Use is governed by your own contract with Anthropic, and the Pro / Max limits are the same ones shared with the Claude app and Claude Code.
- **Chat runs on Claude Code's own agent.** Kari's built-in agent never uses subscription credentials to connect to Anthropic. That is why **Use the Claude Code agent** stays on in settings.

Anthropic does not permit third-party applications to offer login with a Claude account, or to relay requests through Pro / Max credentials. It does permit a platform to offer Claude Code unmodified and let users sign in there with their own subscription. Kari takes the latter approach. For details, see Anthropic's [Claude Code: Legal and compliance](https://code.claude.com/docs/en/legal-and-compliance). Note that Anthropic's terms may change; Anthropic's current terms of service apply to your use through Kari as well.
:::

---

1. On the **Configure your AI Provider** screen, click the **Anthropic Claude Subscription (Pro / Max)** button.

![The Configure your AI Provider screen](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

*Screenshot shown in the original Japanese.*

2. When the Anthropic Claude subscription sign-in screen appears, click the **Sign in…** button.

![The Anthropic Claude subscription sign-in screen](@site/docs/current/main/img/select_anthropic_claude_subscription.png)

*Screenshot shown in the original Japanese.*

3. The first time, Kari downloads and installs Anthropic's official library so the Claude AI agent can run. Click **Continue**.

![Continuing to the download of Anthropic's official library](@site/docs/current/main/img/select_anthropic_claude_subscription_continue.png)

*Screenshot shown in the original Japanese.*

4. The download and installation of Anthropic's official library begins.

![Downloading and installing Anthropic's official library](@site/docs/current/main/img/select_anthropic_claude_subscription_download.png)

*Screenshot shown in the original Japanese.*

5. Once the official library is installed, Kari checks your sign-in status automatically. If you are already signed in on this device, your account and subscription details are shown.

![Already signed in to the Anthropic Claude subscription](@site/docs/current/main/img/select_anthropic_claude_subscription_signedin.png)

*Screenshot shown in the original Japanese.*

6. If you are not signed in yet, the Claude sign-in page opens in your web browser so that you can sign in.

![Sign-in to the Anthropic Claude subscription not yet complete](@site/docs/current/main/img/select_anthropic_claude_subscription_signingin.png)

*Screenshot shown in the original Japanese.*

  - (1) Enter your subscription account on the browser's sign-in page.

![Logging in to Anthropic Claude in the browser](@site/docs/current/main/img/select_anthropic_claude_subscription_browser_login.png)

*Screenshot shown in the original Japanese.*

  - (2) Claude emails you a verification code. Enter the code you receive to authenticate.

![Authenticating in the browser](@site/docs/current/main/img/select_anthropic_claude_subscription_browser_auth.png)

*Screenshot shown in the original Japanese.*

  - (3) Review the authorization screen in the browser and click the button to grant access.

![Granting authorization](@site/docs/current/main/img/select_anthropic_claude_subscription_authorize.png)

*Screenshot shown in the original Japanese.*

  - (4) When the browser sign-in completes successfully, Kari shows the signed-in account and its subscription details.

![Sign-in to the Anthropic Claude subscription complete](@site/docs/current/main/img/select_anthropic_claude_subscription_signedin2.png)

*Screenshot shown in the original Japanese.*

7. With the Anthropic Claude Subscription selected, create a new AI chat session. At the bottom of the session window, click the model icon to the lower left of the input box and the **Change model** menu appears.

![Changing the model for the Anthropic Claude subscription](@site/docs/current/main/img/select_anthropic_claude_subscription_change_model.png)

*Screenshot shown in the original Japanese.*

8. Select the model you want to use.

![Selecting a model for the Anthropic Claude subscription](@site/docs/current/main/img/select_anthropic_claude_subscription_select_model.png)

*Screenshot shown in the original Japanese.*

9. Start working in the chat session.

![Starting a chat on the Anthropic Claude subscription](@site/docs/current/main/img/select_anthropic_claude_subscription_first_chat.png)

*Screenshot shown in the original Japanese.*
