import { I18n } from './i18n'

const VuePlugin = {
  install (app, options) {
    const i18n = new I18n(options)

    app.config.globalProperties.$i18n = i18n
    app.config.globalProperties.$t = i18n.$t
  }
}

export {
  VuePlugin
}