---
sidebar_position: 2
title: MCPサーバーの設定
---

# MCPサーバーの設定

このデスクは、受付中の補助金を調べるために **JGrants Util** という MCP サーバーを使います。デスクの設定にはサーバーの名前だけが記録されているため、サーバー本体は、この Kari 側で用意します。

Jグランツ（jGrants）は、国や自治体の補助金・助成金を扱う日本の補助金ポータルです。この MCP サーバーはその公開 API を使い、API キーの登録は不要です。

:::note

JGrants Util MCP サーバーは標準の Python パッケージで、GotoAI 株式会社が開発し、無償で配布しています。

pypi.org のパッケージページ：https://pypi.org/project/jgrants-util-mcp-server/

:::

## 1. Kari に MCP サーバーを追加する

左のナビゲーションから「**MCPサーバー**」を開きます。

![MCPサーバーの画面](@site/docs/current/main/agentdesk/img/agentdesks_mcp_list.png)

<div className="caption">Kari の「MCPサーバー」画面</div>

「**＋ MCPサーバーを追加**」をクリックし、次のとおり入力します。

| 項目 | 入力する値 |
| --- | --- |
| **MCPサーバー名** | `JGrants-Util` |
| **タイプ** | Python パッケージ（stdio） |
| **パッケージ** | pypi.org を選び、`jgrants-util-mcp-server` |

:::caution サーバー名は `JGrants-Util` と入力してください

デスクの設定は、MCP サーバーを**名前で照合**します。間に空白を入れた「JGrants Util」では別の名前として扱われ、デスクからこのサーバーが見えません。**ハイフンでつないだ `JGrants-Util`** と入力してください。

一覧やデスクの設定画面では「JGrants Util」と表示されますが、これは Kari が表示用に整形しているだけで、記録されている名前は `JGrants-Util` のままです。

:::

![MCPサーバーの追加](@site/docs/current/main/agentdesk/img/agentdesks_mcp_jgrants_install.png)

<div className="caption">パッケージ `jgrants-util-mcp-server` をインストールする</div>

パッケージ名を入力して「**インストール**」をクリックすると、確認のダイアログが出ます。「**インストール**」を選ぶと、`jgrants-util-mcp-server` とその依存パッケージが Kari の Python 環境に入ります。

インストールが終わると、「**コマンド**」欄がパッケージの情報から自動で入力されます（`-m jgrants_util_mcp_server`）。

### サーバー情報を確認する

**環境変数は何も登録しません。** 公開 API を使うため、キーの設定がいらないからです。**タイムアウト**は `300` のままにします。

「**サーバー情報**」の「**再確認**」をクリックすると、Kari が実際にサーバーを起動して情報を読み取ります。

![サーバー情報の確認](@site/docs/current/main/agentdesk/img/agentdesks_mcp_getinfo.png)

<div className="caption">サーバー情報が読み取れていることを確認する</div>

| 項目 | 表示される内容 |
| --- | --- |
| サーバー名 | `jgrants-util` |
| タイトル | Jグランツ補助金ユーティリティ |
| 説明（instructions） | Jグランツ（日本の補助金ポータル）の公開APIで、補助金の検索・詳細・募集要項を閲覧するツール群です。… |

ここが空のままであれば、パッケージのインストールかコマンドの指定に問題があります。先に進まず、入力内容を確認してください。

最後に「**MCPサーバーを追加**」をクリックします。一覧に **JGrants Util** が追加されます。

![MCPサーバーの一覧](@site/docs/current/main/agentdesk/img/agentdesks_mcp_jgrants_installed.png)

<div className="caption">JGrants Util が追加された状態</div>

## 2. デスクに利用を許可する

MCP サーバーを Kari に追加しただけでは、デスクはまだ使えません。**どのデスクに使わせるか**は、デスクごとに決めます。

「補助金診断デスク」を右クリックして「**設定…**」を開き、「**MCPサーバー**」を選びます。**JGrants Util** のスイッチがオンになっていることを確認してください。

![デスクの MCP サーバー設定](@site/docs/current/main/agentdesk/img/agentdesks_desk_mcpservers_jgrants.png)

<div className="caption">デスクの設定で JGrants Util がオンになっていることを確認する</div>

インポートした設定にはこのサーバー名が記録されているので、**名前が一致していればオンになっています**。オフのままであれば、手順1で入力したサーバー名が `JGrants-Util` になっているかを確認してください。

変更した場合は「**保存**」をクリックします。

## このデスクが使うツール

スキル「補助金診断スキル」は、この MCP サーバーの次のツールを使います。どう使うかはスキルに書いてあるので、設定は不要です。

| ツール | 役割 |
| --- | --- |
| `search_subsidies` | キーワードと地域で、受付中の補助金を検索する |
| `get_subsidy_detail` | 補助金の概要・補助率・上限額・期間・公式の掲載ページを取得する |
| `read_attachment` | 公募要領などの添付資料を読む |

次は、[Eメールの設定](./setupemails.md)に進みます。
