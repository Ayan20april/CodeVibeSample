const vscode = require('vscode');
const voice = require('./voice');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand('codevibe.startVoice', async () => {
    vscode.window.showInformationMessage('CodeVibe Voice Coding Activated');
    await voice.startRecognition();
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};