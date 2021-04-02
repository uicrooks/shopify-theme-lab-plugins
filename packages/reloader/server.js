const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')
const WebSocket = require('ws')
const chalk = require('chalk')
const options = require('./config')

/**
 * custom console.log
 */
const log = (msg) => {
  console.log(`${chalk.yellow.bold('[reloader]')} ${chalk.yellow.inverse(` ${msg} `)}`)
}

/**
 * create websocket server
 * for remote Shopify theme
 */
const wss = options.webSocketSecure
  ? new WebSocket.Server({ server:
    https.createServer({
      cert: fs.readFileSync(path.resolve(__dirname, `../../${process.env.CERT ? process.env.CERT : 'cert.pem'}`)),
      key: fs.readFileSync(path.resolve(__dirname, `../../${process.env.KEY ? process.env.KEY : 'key.pem'}`))
    }).listen(options.webSocketPort)
  }) : new WebSocket.Server({ port: options.webSocketPort })

wss.broadcast = (msg) => {
  wss.clients.forEach((client) => {
    client.send(msg)
  })
}

/**
 * create HTTP server
 * for themekit notify requests
 */
http.createServer((req, res) => {
  const url = req.url

  if (url === '/reload' && wss.clients.size) {
    setTimeout(() => {
      wss.broadcast('reload')
      log('reloading clients')
    }, options.delay)
  } else {
    log('no clients connected')
  }

  res.end()
}).listen(options.serverPort)