# Animal Logger Tools

## 概要

Animal Logger Toolsは、JavaScriptまたはTypeScriptのソースに簡単にログを追加できるVS Code拡張機能です。

## 機能一覧

- コマンドからのログ追加
- 右下のステータスバーからのログ追加

## 利用方法

### 1. リポジトリのクローン

まずは本リポジトリをローカル環境にクローンします。

```bash
git clone https://github.com/RaccoonDog256/Animal-logger-tools.git
````

### 2. ビルド手順

依存パッケージのインストール後、VSIXファイルを生成してください。

```bash
cd Animal-logger-tools
npm install
npx vsce package
```

この操作により、`*.vsix` ファイルが生成されます。

### 3. VS Codeへのインストール方法（VSIXファイル使用）

1. Visual Studio Code を起動します
2. サイドバーの「拡張機能」アイコン（または `Ctrl+Shift+X`）をクリックします
3. 右上の「…（三点メニュー）」をクリックし、「VSIX からインストール」を選択します
4. 上記で作成された `.vsix` ファイルを選択します
5. インストール完了後、再読み込み（Reload）を求められる場合はそれに従ってください

## 開発環境

* Node.js 18.x
* TypeScript
* VS Code Extensions API
* vsce（Visual Studio Code Extension Manager）
