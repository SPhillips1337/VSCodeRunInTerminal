# Terminal Bridge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A minimal VS Code extension that surfaces the built-in **Run Selected Text in Terminal** action where you actually need it — in the right-click context menu and on a fast keybinding.

> **GitHub:** [SPhillips1337/VSCodeRunInTerminal](https://github.com/SPhillips1337/VSCodeRunInTerminal)

## Features

- **Context menu entry** — Right-click any selection in the editor and choose **Run in Terminal**. The item only appears when text is selected, so it never clutters the menu otherwise.
- **Keybinding** — `Alt+Shift+Enter` sends the selection to the active terminal without touching the mouse.
- Both actions delegate to VS Code's native `workbench.action.terminal.runSelectedText`, so behaviour is identical to the built-in command — no reimplementation, no surprises.

## Requirements

- VS Code **1.74.0** or later (uses the modern zero-`activationEvents` extension model).
- An integrated terminal open in VS Code. If no terminal exists, VS Code will open one automatically.

## Project structure

```
RunInTerminal/
├── extension.ts          # Extension entry point
├── package.json          # Manifest and contribution points
├── tsconfig.json         # TypeScript compiler config
├── .vscode/
│   └── launch.json       # F5 debug launch config
└── out/                  # Compiled JS (generated, not committed)
```

## Installation

### Option 1 — F5 (Extension Development Host) — recommended for testing

Launches a second VS Code window with the extension live-loaded. No packaging or publishing required.

```bash
npm install
npm run compile
```

Then press `F5` in VS Code (with this folder open) — a new **Extension Development Host** window opens. Test the context menu and keybinding there.

The [.vscode/launch.json](.vscode/launch.json) in this repo is pre-configured for this workflow.

### Option 2 — Install as `.vsix` (permanent local install)

Produces a self-contained package you can install like any other extension.

```bash
npm install -g @vscode/vsce
vsce package
```

Then either:
- Command palette (`Ctrl+Shift+P`) → **Extensions: Install from VSIX** → select the `.vsix` file, or
- `code --install-extension terminal-bridge-0.0.1.vsix`

> **Note:** `vsce package` requires the `"publisher"` field in `package.json` to be set to a non-placeholder string. It does not need to match a real Marketplace account for local use.

## Keybinding

| Action | Default shortcut |
|---|---|
| Run in Terminal | `Alt+Shift+Enter` |

To change the binding, open **Keyboard Shortcuts** (`Ctrl+K Ctrl+S`), search for `terminalBridge.runInTerminal`, and reassign.

## Extension settings

This extension contributes no settings. It is intentionally zero-configuration.

## Known limitations

- The selection is sent as-is. Markdown code-fence markers (` ``` `), shell prompt characters (`$`), or other decorators are not stripped automatically. Copy the raw command text rather than a rendered markdown block.
- Only the **active** terminal receives the text. Use VS Code's terminal switcher to target a specific session before running.
