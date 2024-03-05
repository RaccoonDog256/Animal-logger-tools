import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "console-kawaii" is now active!'
  );

  let disposable = vscode.commands.registerCommand("console-kawaii.con", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage("No editor is active");
      return;
    }

    // ランダムな絵文字を生成する関数
    const randomEmoji = () => {
      const emojis = [
        "🐱",
        "🐶",
        "🐭",
        "🐹",
        "🐰",
        "🦊",
        "🐻",
        "🐼",
        "🐨",
        "🐯",
        "🦁",
        "🐮",
        "🐷",
        "🐸",
        "🐵",
      ];
      // ランダムに1つの絵文字を選択
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      // 選択した絵文字を20回繰り返して連結
      let randomEmojis = emoji.repeat(20);
      return randomEmojis;
    };

    editor.edit((editBuilder) => {
      editor.selections.forEach((selection) => {
        const currentLine = editor.document.lineAt(selection.active.line);
        // 現在の行のインデントを取得
        const currentLineIndentation = currentLine.text.substring(
          0,
          currentLine.firstNonWhitespaceCharacterIndex
        );

        // インデントを適用したconsole.logのスニペット
        const snippet = new vscode.SnippetString(
          `${currentLineIndentation}console.log('${randomEmoji()}');\n${currentLineIndentation}$0`
        );
        editor.insertSnippet(
          snippet,
          new vscode.Position(selection.active.line, 0)
        );
      });
    });
  });

  //　console.log()を挿入.カーソルは()の中に
  let disposable2 = vscode.commands.registerCommand(
    "console-kawaii.insertSole",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No active editor");
        return;
      }

      const snippet = new vscode.SnippetString("console.log($1)");
      editor.insertSnippet(snippet, editor.selection.active);
    }
  );

  // コマンドを登録
  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);

  //ボタンで実行
  const button = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    0
  );
  button.command = "console-kawaii.con";
  button.text = "🦊🐻🐺";
  context.subscriptions.push(button);
  button.show();

  //ボタンで実行2
  const button2 = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    0
  );
  button2.command = "console-kawaii.insertSole";
  button2.text = "console";
  context.subscriptions.push(button2);
  button2.show();
}

export function deactivate() {}
