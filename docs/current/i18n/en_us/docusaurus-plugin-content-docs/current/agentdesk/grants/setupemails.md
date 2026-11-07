---
sidebar_position: 3
title: Setting up email
---

# Setting up email

The desk sends email to tell the **requester** that a diagnosis report is ready, and to tell the **administrator** about the turning points of its processing. There are two things to set.

| Setting | What it is for |
| --- | --- |
| **Always-Receiving Email Addresses** | The address the administrator receives on. Registering one is required |
| **Sending Email Account** | The account the desk sends from, over SMTP |

Without both of them the desk will not start. It is what stops a desk from accepting a request and then having nobody to deliver the result to.

Right-click 「補助金診断デスク」, choose **Settings…**, and scroll down in **General** to **Email Notifications**. Anything not yet set is marked 「（*設定未完了）」 — not finished.

![Email Notifications in the settings](@site/docs/current/main/agentdesk/img/agentdesks_settings_general_emails.png)

<div className="caption">Email Notifications, under General in the settings window (shown in Japanese)</div>

## Register the administrator's address

Click **Set the Always-Receiving Email Addresses**.

![The Always-Receiving Email Addresses dialog](@site/docs/current/main/agentdesk/img/agentdesks_settings_email_admin.png)

<div className="caption">Registering the administrator's email address (shown in Japanese)</div>

On the **Admin** row, enter a display name and an email address. Tick the kinds of mail it should receive.

| Kind | What arrives | Default on this desk |
| --- | --- | --- |
| **Event Notices** | What happened at the turning points of processing, such as a failure | On |
| **Reports and Deliverables** | The result of a request, and the PDF it produced | Off |

If the administrator should receive the diagnosis report as well, tick Reports and Deliverables too. The **requester** receives the delivery notification at the address entered in the form regardless of this setting.

**Add** registers addresses besides the administrator's. Click **OK** when you are done.

## Set up the sending account

Click **Set the Sending Email Account**, and you are asked which kind of account to use.

![Choosing the kind of sending account](@site/docs/current/main/agentdesk/img/agentdesks_settings_email_sender.png)

<div className="caption">Choosing between Gmail and Other Email (shown in Japanese)</div>

| Kind | When to use it |
| --- | --- |
| **Gmail** | Sending from a Gmail account. It signs in with an app password |
| **Other Email** | Any mailbox with an SMTP server — a hosting provider, an ISP, your own server |

:::caution Do not use a personal account

A desk runs unattended and sends mail to requesters. Prepare **an account that belongs to the desk**, not to a person.

:::

### Using Gmail

Gmail will not send from outside with an ordinary password. An **app password** is required, and only Google can issue one.

![Setting up the Gmail account](@site/docs/current/main/agentdesk/img/agentdesks_settings_gmail_setup.png)

<div className="caption">Setting up the Gmail account (shown in Japanese)</div>

Follow the steps on screen and do these two in a browser first.

1. **Turn on two-step verification.** Without it Google issues no app password, and the app password page says only that the setting is not available for this account.
2. **Create an app password and copy the 16 characters it shows.**

Back in Kari, enter the **sending address** and the **app password**. The server name and port are fixed at `smtp.gmail.com` port 587, so there is nothing to set.

### Using another email account

![Setting up an account with an SMTP server](@site/docs/current/main/agentdesk/img/agentdesks_settings_otheremail_setup.png)

<div className="caption">Setting up an account with an SMTP server (shown in Japanese)</div>

Enter the sending address, the SMTP server name, the port and the encryption (STARTTLS or SSL/TLS). The server name should be the one your provider gives (for example `smtp.example.co.jp`), not an IP address.

## Confirm with a test message

When you have finished entering, click **Send a Test**. One message goes to **the administrator's address** you registered a moment ago.

- If it says it was sent and the message really arrives, you are done. Close with **OK**.
- "The mail server refused the account" means the address or the password is wrong. With Gmail, the usual cause is having entered the ordinary password.
- "The mail server could not be reached" means the combination of server name, port and encryption needs checking.

:::note

The test needs the administrator's address, so register that before running it.

:::

Finally, click **Save** at the top right of the settings window.

![Saving the General settings](@site/docs/current/main/agentdesk/img/agentdesks_settings_general_save.png)

<div className="caption">Saving the General settings (shown in Japanese)</div>

Next, go on to [Checking the settings and starting the desk](./startdesk.md).
