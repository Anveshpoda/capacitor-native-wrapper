const fs = require('fs');
const path = require('path');

// Get the URL from environment variable or use default
const newUrl = process.env.APP_URL || 'https://profithands.com/';

// Read the capacitor config
const configPath = path.join(__dirname, '..', 'capacitor.config.json');
const config = require(configPath);

// Update the server URL
config.server = {
  ...config.server,
  url: newUrl,
  cleartext: true
};

// Write back the updated config
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
