import { I18n } from './i18n'

const VuePlugin = {
  install (Vue, options) {
    const i18n = new I18n(options)

    Vue.prototype.$i18n = i18n
    Vue.prototype.$t = i18n.$t
  }
}

export {
  VuePlugin
}