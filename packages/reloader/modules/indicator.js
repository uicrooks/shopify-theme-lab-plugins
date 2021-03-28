class ReloaderIndicator {
  constructor () {
    this.HTMLBodyElement = document.querySelector('body')
    this.HTMLWrapperElement = document.createElement('div')

    // base styling
    Object.assign(this.HTMLWrapperElement.style, {
      position: 'fixed',
      top: 0,
      right: 0,
      zIndex: '999999999',
      background: 'rgb(0,0,0)',
      color: 'rgb(255,255,255)',
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px',
      borderRadius: '0 0 0 8px',
      boxShadow: '0 0 15px rgba(0,0,0,0.15)',
      transition: 'opacity 0.25s ease-in-out',
      opacity: 0
    })
  }

  _display () {
    this.HTMLBodyElement.prepend(this.HTMLWrapperElement)

    // pseudo animation through timeouts
    setTimeout(() => {
      this.HTMLWrapperElement.style.opacity = 1

      setTimeout(() => {
        this.HTMLWrapperElement.style.opacity = 0
        setTimeout(() => { this._destroy() }, 500)
      }, 1500)
    }, 50)
  }

  _destroy () {
    this.HTMLWrapperElement.remove()
  }

  _template ({ msg, color, bgColor }) {
    this.HTMLWrapperElement.innerHTML = `
      <div style="display: inline-flex;">
        <div style="padding: 8px 12px;">
          Reloader
        </div>

        <div style="background: ${bgColor}; color: ${color}; padding: 8px 12px;">
          ${msg}
        <div>
      </div>
    `
  }

  connected () {
    this._destroy()
    this._template({
      msg: 'connected',
      color: 'rgb(0,100,50)',
      bgColor: 'rgb(100,245,180)',
    })
    this._display()
  }

  disconnected () {
    this._destroy()
    this._template({
      msg: 'disconnected',
      color: 'rgb(100,0,0)',
      bgColor: 'rgb(255,140,140)'
    })
    this._display()
  }
}

module.exports = ReloaderIndicator