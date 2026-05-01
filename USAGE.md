# Usage Guide — Terminal Bridge

## Setup

Before using the extension you need to compile it once:

```bash
npm install       # pulls @types/vscode, typescript, @types/node
npm run compile   # tsc compiles extension.ts → out/extension.js
```

Then load it in VS Code using one of two methods:

| Method | When to use |
|---|---|
| Press `F5` (Extension Development Host) | Development and testing — no packaging needed |
| `vsce package` then install the `.vsix` | Permanent install on your machine |

See [README.md](README.md) for full install steps.

---

## Quickstart

1. Open any file in VS Code.
2. Highlight the text you want to run (a shell command, a script line, a code snippet).
3. Either:
   - Press **`Alt+Shift+Enter`**, or
   - Right-click the selection and choose **Run in Terminal**.
4. The selected text is sent to the active integrated terminal and executed immediately.

---

## Common workflows

### Running a single shell command from a markdown file

Open a `.md` or `.txt` file containing instructions. Highlight just the command (not the backticks or `$` prefix), then press `Alt+Shift+Enter`.

```
# Setup

Run the following to install dependencies:

npm install        ← select this line only
```

### Running a multi-line script block

Select multiple lines — the entire block is sent to the terminal in one shot, just as if you had pasted it.

```bash
export NODE_ENV=production
npm run build
npm run test
```

Select all three lines, press `Alt+Shift+Enter`, and they execute in sequence.

### AI-generated commands

When an AI assistant produces a command inside a chat or inline suggestion, highlight the command text (exclude surrounding prose), then use the keybinding or context menu to run it without copy-pasting.

---

## Changing the keybinding

1. Open **Keyboard Shortcuts** with `Ctrl+K Ctrl+S`.
2. Search for `terminalBridge.runInTerminal`.
3. Click the pencil icon and press your preferred key combination.

---

## Targeting a specific terminal

Terminal Bridge always sends text to whichever terminal is currently **active**. To choose a target:

- Click the terminal name in the Terminal panel dropdown, or
- Use `Ctrl+` `` ` `` to focus the terminal, then select the session from the tab list.

Once the correct terminal is focused, switch back to the editor and use the extension normally.

---

## Tips

- **Strip `$` prefixes before running.** The `$` character at the start of a shell prompt will be sent literally and cause a command-not-found error. Select from the character after `$` onwards, or omit it when copying commands.
- **Single-line vs multi-line.** Single-line selections run and execute immediately. Multi-line selections are pasted as a block — your shell's behaviour (e.g. whether it executes line-by-line or waits for EOF) determines exactly when each line runs.
- **`when` clause.** The context menu item only appears when text is selected. If you don't see it, make sure you have an active text selection in the editor.
