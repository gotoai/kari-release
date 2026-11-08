---
sidebar_position: 7
title: Other settings
---

# Other settings

This page covers the remaining topics in the settings window. For the basics of a desk and the conditions it runs under, see [General settings](./generalsettings.md).

## AI Providers

Choose the **AI provider, model and thinking level** this desk thinks with. It is held **per desk**, separately from what Kari itself uses.

Only providers already configured in Kari can be chosen. Providers switched off in Kari itself can still be chosen for a desk: that switch is for Kari's own chats, and a desk is a different agent with a different job.

:::caution Subscriptions cannot be chosen

A desk keeps processing requests with nobody attending it, so **only providers that use an API key** can be chosen. Personal Claude or ChatGPT subscriptions do not appear in the list, and the desk process refuses them as well.

:::

## Inbound Channels

The route a request arrives by. Today there is the **Web Intake Portal**, a page that accepts the [request form](./requestform.md) in a browser.

- **Title**: shown at the top of the portal. Left empty, the display name is used.
- **Port**: each desk needs its own (1024 to 65535; 8001 upwards by default). "Test the port" checks whether that number is usable on this computer.
- **Credentials**: turn them on and the portal asks for a user name and password before it shows the form. The password is not kept in the desk folder, so copying the folder does not copy it.

Only this computer can open the portal. To reach it from another computer on the network, or from outside, set up a gateway or reverse proxy that answers on that address.

## Extensions

Which of Kari's extensions the desk is given. Turn off whatever the processing does not use.

| Extension | What it does |
| --- | --- |
| **Python** | Runs Python on files: spreadsheets, documents, PDFs, analysis and charts. It uses the interpreter bundled with Kari, so nothing needs installing |
| **Web Fetch** | Reads web pages and PDFs from the internet as text. It runs on the Python extension, so **Python must stay on** |

Extensions are the tools Kari comes with. Data sources and outside systems specific to the work are given as [MCP servers](./mcpservers.md) instead.

:::caution

**Turn off the extensions the processing does not use.** The more tools an agent can reach, the more room it has to pick the wrong one.

:::

## Desk Scheduler

Where the [Closing Command](./generalsettings.md#reception-time-and-the-closing-command) runs once the day's processing is over, the **Desk Scheduler** takes on **work whose time is fixed**. Starting a GPU server before reception opens, for instance.

- The schedule is a five-field crontab read in **JST** (minute, hour, day of month, month, day of week). 0 is Sunday. `30 8 * * 1-5` is 08:30, Monday to Friday.
- Each entry has a name, a command and a time limit in seconds. The name is what the entry is called in the log and in notifications.
- **Entries run only while the desk is running.** Nothing runs while the desk is stopped or the computer is asleep. However, **an entry that was missed runs once, the next time the desk starts.** Work that piled up during sleep can therefore all run at once, so write commands that do no harm when they run more than once.
- Do not write an API key or other credential into a command. **Name a script and handle the credential inside it.** Commands are stored in the settings file as they are, so take care not to leak anything through them.
