const ReloaderIndicator = require('./modules/indicator')
const options = require('./config')

class ReloaderClient {
  constructor () {
    this.indicator = new ReloaderIndicator()
    this.initialConnection = true
    this._init()
  }

  _log ({ msg, type }) {
    let css

    if (type === 'success') css = 'background: rgb(190,255,175); color: rgb(60,100,40)'
    else if (type === 'error') css = 'background: rgb(245,165,165); color: rgb(80,40,40)'

    console.log(`%c Reloader: ${msg} `, css)
  }

  _init () {
    this.socket = new WebSocket(`${options.webSocketSecure ? 'wss': 'ws'}://localhost:${options.webSocketPort}`)

    /**
     * websocket eventslisteners
     */
    this.socket.addEventListener('open', () => {
      if (!this.initialConnection) this.initialConnection = true
      this._log({ msg: 'connected', type: 'success' })
      if (options.indicator) this.indicator.connected()
    })

    this.socket.addEventListener('close', () => {
      if (this.initialConnection) {
        this.initialConnection = false
        this._log({ msg: 'disconnected', type: 'error' })
        if (options.indicator) this.indicator.disconnected()
      }

      setTimeout(() => this._init(), 1000)
    })

    this.socket.addEventListener('message', (event) => {
      if(event.data === 'reload') location.reload()
    })
  }
}

/**
 * export
 */
module.exports = ReloaderClient