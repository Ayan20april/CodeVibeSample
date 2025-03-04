const vscode = require('vscode');
const fetch = require('node-fetch');

const API_URL = 'https://api.deepseek.com/v1/recognize';
const API_KEY = 'sk-5f77a26d04f94cfaacd47f2f241c9e5c';

async function startRecognition() {
  vscode.window.showInformationMessage('Listening for voice commands...');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ audio: 'placeholder-audio-data' })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    vscode.window.showInformationMessage(`Command recognized: ${data.transcript}`);
  } catch (error) {
    vscode.window.showErrorMessage(`Recognition failed: ${error.message}`);
  }
}

module.exports = { startRecognition };