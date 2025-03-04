const fetch = require('node-fetch');

async function sendVoiceCommand(command) {
  try {
    const response = await fetch('https://api.deepseek.com/v1/voice-to-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY`
      },
      body: JSON.stringify({ command })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.code || "No code generated";
  } catch (error) {
    console.error(error);
    return "Error processing request";
  }
}

module.exports = { sendVoiceCommand };