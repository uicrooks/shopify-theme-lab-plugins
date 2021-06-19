/// <reference path="../types/global.ts" />

import { I18n } from './i18n'

export const VuePlugin = {
  install (app: any, options?: I18nOptions) {
    console.log(options)
    const i18n = new I18n(options)

    app.config.globalProperties.$i18n = i18n
    app.config.globalProperties.$t = i18n.$t
  }
}