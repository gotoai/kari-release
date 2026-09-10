---
sidebar_position: 1
slug: /
title: Kari in 5 minutes
sidebar_label: Quickstart
description: From installing Kari to your first AI chat, in five minutes.
---

import TabItem from "@theme/TabItem";
import DownloadTabs, { DownloadCard } from "@site/src/components/DownloadTabs";

# Kari in 5 minutes

Kari (Japanese Hiragana かり and Kanji 雁, which means "Goose") is an AI assistant that reads, thinks and works alongside you on the files on your own machine. Drafting email, summarizing documents, translating material, building slides, analyzing and visualizing data, retrieving information from the web — Kari brings all of that work into a single tool, as a user-centered front end for AI agents.

This tutorial walks through the following steps in order.

- ✅ Install Kari
- ✅ Configure an AI provider
- ✅ Choose a working folder
- ✅ Create a new AI session
- ✅ Start chatting and working with the AI

Let's begin 🚀

## Install Kari

---

Download the build for your platform below.

<DownloadTabs>
  <TabItem value="windows" label="Windows">
    <DownloadCard platform="windows" />

    1. Run the downloaded installer (KariSetup-version-x64.exe).
    2. Follow the installer's prompts, then launch Kari from the Start menu or the desktop.

    {/* TODO: insert image ![The Windows installer](@site/docs/current/main/img/quickstart_install_windows.png) */}
  </TabItem>
  <TabItem value="macos" label="macOS">
    <DownloadCard platform="macos" />

    1. Download the DMG for your Mac, Apple Silicon or Intel, open it, and drag Kari into the Applications folder.
    2. Launch Kari from the Applications folder.

    ![The macOS DMG window](@site/docs/current/main/img/quickstart_macosdmginstall.png)

    *Screenshot shown in the original Japanese.*
  </TabItem>
  <TabItem value="linux" label="Linux">
    <DownloadCard platform="linux" />

    1. Download the `.deb` file to a local folder.
    2. Install it with sudo privileges.

    ```bash
    sudo dpkg -i kari_<version>_amd64.deb
    ```

    3. On Ubuntu, launch Kari from Applications / Programming / Kari. From the command line, run `kari` to start the application.

    ```
    kari
    ```
    {/* TODO: insert image ![Kari starting on Linux](@site/docs/current/main/img/quickstart_install_linux.png) */}
  </TabItem>
</DownloadTabs>

---

## Configure an AI provider

On the start screen, click **Configure your AI Provider**.

![The Configure your AI Provider button on the start screen](@site/docs/current/main/img/quickstart_aiprovider.png)

*Screenshot shown in the original Japanese.*

The **Configure your AI Provider** dialog opens. Select a provider from the list, or choose **Add a custom provider**. To run a model on this machine instead, choose **Use a Local Model**.

![The Configure your AI Provider dialog](@site/docs/current/main/img/quickstart_aiprovider_settings.png)

*Screenshot shown in the original Japanese.*

Click **Select a provider** to choose from about 70 pre-defined AI providers.

![The list of pre-defined providers](@site/docs/current/main/img/quickstart_aiprovidersettingslist.png)

*Screenshot shown in the original Japanese.*

Click **Add a custom provider** to add an AI provider either by starting from a provider template or by configuring it manually.

![The Add Custom Provider screen](@site/docs/current/main/img/quickstart_aiprovidersettingsmanual.png)

*Screenshot shown in the original Japanese.*

## Choose a working folder

Right-click **Explorer** in the left navigation panel. Choose **Open Folder…** from the menu that appears, then pick your working folder.

![The Open Folder menu item under Explorer](@site/docs/current/main/img/quickstart_explorer_open.png)

*Screenshot shown in the original Japanese.*

Once a working folder is chosen, the files under it are listed. Click a file name and its contents open in the viewer in the center of the window.

![A file's contents shown in the center viewer](@site/docs/current/main/img/quickstart_file_view.png)

*Screenshot shown in the original Japanese.*

## Create a new AI session

Click the **＋** button in the bar at the top of the session panel on the right to create a new AI chat session. When you have several pieces of work in flight, open a session for each of them.

![The new session button at the top of the session panel](@site/docs/current/main/img/quickstart_new_session_button.png)

*Screenshot shown in the original Japanese.*

## Start chatting and working with the AI

Type what you need done into the chat box, and the AI works through the request. Follow along as it goes, and send further instructions or corrections whenever you want to steer it.

![Asking the AI to summarize the open document](@site/docs/current/main/img/quickstart_aichat.png)

*Screenshot shown in the original Japanese.*

## Next steps

Next we walk through concrete examples of using Kari to make everyday work go faster.
