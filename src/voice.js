const vscode = require('vscode');
const fetch = require('node-fetch');

async function startRecognition() {
  vscode.window.showInformationMessage('Listening for voice commands...');
  // Placeholder for DeepSeek API request
  const result = await api.sendVoiceCommand("Create a button component");
  vscode.window.showInformationMessage(`Command recognized: ${result}`);
  setTimeout(() => {
    vscode.window.showInformationMessage('Command recognized: Create a button component');
  }, 3000);
}

module.exports = { startRecognition };