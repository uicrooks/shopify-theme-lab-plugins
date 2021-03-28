const ReloaderClient = require('./client')

/**
 * autoload in the browser
 */
;(() => {
  if (window) new ReloaderClient()
})()