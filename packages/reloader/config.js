const package = require('../../package.json')

// load values from package.json
module.exports = {
  serverPort: package.config && package.config.reloader.serverPort || 5000, // port for communication with Shopify themekit
  webSocketPort: package.config && package.config.reloader.webSocketPort || 5050, // port for communication with reloader client
  delay: package.config && package.config.reloader.delay || 2000, // delay the auto-reload by specified milliseconds
  indicator: package.config && package.config.reloader.indicator || false // show HTML element on status change
}