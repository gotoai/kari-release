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

:::info The steps are the same as in Example 1

These screens and steps are the same for every desk. For the walkthrough with screenshots, see [Setting up email in Example 1: Subsidy diagnosis desk](../grants/setupemails.md). This page lists only the essentials.

:::

## Where to set it

Right-click 「企業業績診断デスク」, choose **Settings…**, and scroll down in **General** to **Email Notifications**. Anything not yet set is marked 「（*設定未完了）」 — not finished.

## The essentials

| Step | What to do |
| --- | --- |
| **Register the administrator's address** | Under "Set the Always-Receiving Email Addresses", enter a display name and an address. Choose which kinds to receive, Event Notices and Reports and Deliverables. On this desk the defaults are Event Notices on, Reports and Deliverables off |
| **Set up the sending account** | Under "Set the Sending Email Account", choose **Gmail** (an app password is required; turn on two-step verification first) or **Other Email** (enter the SMTP server name, port and encryption) |
| **Confirm with a test message** | One message goes to the administrator's address. If nothing arrives, [the Example 1 section on testing](../grants/setupemails.md#confirm-with-a-test-message) lists the usual causes |
| **Save** | Click Save at the top right of the settings window |

:::caution Do not use a personal account

A desk runs unattended and sends mail to requesters. Prepare **an account that belongs to the desk**, not to a person.

:::

:::note The delivery notification to the requester

The **requester** receives the delivery notification at the address entered in the form, regardless of the administrator's settings. This desk has **email attachments** on, so the PDF diagnosis report is attached to the message as well.

The request form's **Code Verification** — confirming the recipient's email address — is also sent from the account configured here.

:::

Next, go on to [Checking the settings and starting the desk](./startdesk.md).
