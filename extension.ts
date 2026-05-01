import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'terminalBridge.runInTerminal',
    () => {
      vscode.commands.executeCommand('workbench.action.terminal.runSelectedText');
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
