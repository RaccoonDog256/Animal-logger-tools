import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "console-kawaii" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "console-kawaii.helloWorld",
    () => {
      // ランダムな絵文字を生成してログに出力する関数
      const randomEmojis = () => {
        const emojis = [
          "😄",
          "🐱‍👤",
          "🍀",
          "🌈",
          "⭐",
          "🎉",
          "🐾",
          "🍓",
          "🌟",
          "💫",
        ];
        let randomEmojis = "";
        for (let i = 0; i < 6; i++) {
          randomEmojis += emojis[Math.floor(Math.random() * emojis.length)];
        }
        return randomEmojis;
      };

      // 生成したランダムな絵文字をコンソールに出力
      console.log(randomEmojis());

      // ユーザーに通知するメッセージ
      vscode.window.showInformationMessage(
        "Hello World from console-kawaii with emojis!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
