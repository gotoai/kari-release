---
sidebar_position: 2
title: MCPサーバーの設定
---

# MCPサーバーの設定

このデスクは、有価証券報告書そのものを読むために **EDINET Util** という MCP サーバーを使います。デスクの設定にはサーバーの**名前だけ**が記録されているため、サーバー本体は、この Kari 側で用意します。

:::note

EDINET Util MCP サーバーは標準の Python パッケージで、GotoAI 株式会社が開発し、無償で配布しています。

pypi.org のパッケージページ：https://pypi.org/project/edinet-util-mcp-server/

:::

手順は3つです。

1. EDINET の API キーを取得する
2. Kari に MCP サーバーを追加する
3. デスクにそのサーバーの利用を許可する

## 1. EDINET の API キーを取得する

EDINET API は、金融庁が提供する開示書類の取得用 API です。利用には登録が必要です。

- **EDINET閲覧（提出）サイト** https://disclosure2.edinet-fsa.go.jp/ から API の利用登録を行い、**Subscription Key**（API キー）を取得します。
- 登録には**電話番号による認証**があります。手続きの詳細は EDINET 側の案内に従ってください。
- 取得したキーは、このあと Kari の MCP サーバー設定に入力します。

:::caution

API キーは、取得した本人のためのものです。他の人と共有したり、設定ファイルやスクリプトに直接書き込んだりしないでください。Kari では、次の手順のとおり**環境変数として登録**します。

:::

## 2. Kari に MCP サーバーを追加する

**Kari 本体**の左のナビゲーションから「**MCPサーバー**」を開きます。

![MCPサーバーの画面](@site/docs/current/main/agentdesk/img/agentdesks_mcp_list.png)

<div className="caption">Kari の「MCPサーバー」画面</div>

「**＋ MCPサーバーを追加**」をクリックし、次のとおり入力します。

| 項目 | 入力する値 |
| --- | --- |
| **MCPサーバー名** | `EDINET-Util` |
| **タイプ** | Python パッケージ（stdio） |
| **パッケージ** | pypi.org を選び、`edinet-util-mcp-server` |

:::caution サーバー名は `EDINET-Util` と入力してください

デスクの設定は、MCP サーバーを**名前で照合**します。間に空白を入れた「EDINET Util」では別の名前として扱われ、デスクからこのサーバーが見えません。**ハイフンでつないだ `EDINET-Util`** と入力してください。

一覧やデスクの設定画面では「EDINET Util」と表示されますが、これは Kari が表示用に整形しているだけで、記録されている名前は `EDINET-Util` のままです。

:::

パッケージ名を入力して「**インストール**」をクリックすると、確認のダイアログが出ます。「**インストール**」を選ぶと、`edinet-util-mcp-server` とその依存パッケージが Kari の Python 環境に入ります。

![MCPサーバーの追加とパッケージのインストール](@site/docs/current/main/agentdesk/img/agentdesks_mcp_edinet_install.png)

<div className="caption">パッケージ `edinet-util-mcp-server` をインストールする</div>

インストールが終わると、「**コマンド**」欄がパッケージの情報から自動で入力されます（`-m edinet_util_mcp_server`）。

### API キーを環境変数に登録する

同じダイアログを下にスクロールし、「**環境変数**」で次のペアを追加します。両方の欄を入力してから「**＋ 追加**」をクリックしてください。

| 変数名 | 値 |
| --- | --- |
| `EDINET_API_KEY` | 手順1で取得した Subscription Key |

![環境変数に EDINET_API_KEY を登録する](@site/docs/current/main/agentdesk/img/agentdesks_mcp_edinet_set_apikey.png)

<div className="caption">`EDINET_API_KEY` に API キーを登録する</div>

**タイムアウト**は `300` のままにします。有価証券報告書は分量が大きく、取得と変換に時間がかかるためです。

### サーバー情報を確認する

「**サーバー情報**」の「**再確認**」をクリックすると、Kari が実際にサーバーを起動して情報を読み取ります。次のように表示されれば、サーバーは正しく動いています。

![サーバー情報の確認](@site/docs/current/main/agentdesk/img/agentdesks_mcp_edinet_getinfo.png)

<div className="caption">サーバー情報が読み取れていることを確認する</div>

| 項目 | 表示される内容 |
| --- | --- |
| サーバー名 | `edinet-util` |
| タイトル | EDINET 開示書類ユーティリティ |
| 説明（instructions） | EDINET（金融庁）の提出書類を日付で探し、有価証券報告書などを Markdown に変換して読むツール群です。… |

ここが空のままであれば、パッケージのインストールかコマンドの指定に問題があります。先に進まず、入力内容を確認してください。

最後に「**MCPサーバーを追加**」をクリックします。一覧に **EDINET Util** が追加されます。

![MCPサーバーの一覧](@site/docs/current/main/agentdesk/img/agentdesks_mcp_edinet_installed.png)

<div className="caption">EDINET Util が追加された状態</div>

## 3. デスクに利用を許可する

MCP サーバーを Kari に追加しただけでは、デスクはまだ使えません。**どのデスクに使わせるか**は、デスクごとに決めます。

「企業業績診断デスク」を右クリックして「**設定…**」を開き、「**MCPサーバー**」を選びます。**EDINET Util** のスイッチがオンになっていることを確認してください。

![デスクの MCP サーバー設定](@site/docs/current/main/agentdesk/img/agentdesks_settings_mcp_edinet.png)

<div className="caption">デスクの設定で EDINET Util がオンになっていることを確認する</div>

インポートした設定にはこのサーバー名が記録されているので、**名前が一致していればオンになっています**。オフのままであれば、手順2で入力したサーバー名が `EDINET-Util` になっているかを確認してください。

変更した場合は「**保存**」をクリックします。

:::note JGrants Util について

一覧にもう一つ「JGrants Util」が並んでいる場合、これは[例1：補助金診断デスク](../grants/importdesk.md)で使うサーバーです。このデスクでは使わないので、**オフのまま**にしてください。

:::

次は、[Eメールの設定](./setupemails.md)に進みます。
