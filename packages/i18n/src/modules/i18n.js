/**
 * I18n class which loads all shopify locale files
 * and exposes a translate $t function
 */
class I18n {
  constructor (options) {
    this.locale = window.Shopify.locale || options.fallbackLocale || 'en'
    this.translations = this._loadTranslations()
    this.$t = this.$t.bind(this)
  }

  _loadTranslations () {
    const translations = {}
    const files = require.context('@shopify/locales/', true, /\.json$/)

    files.keys().forEach(key => {
      const locale = files(key)

      const name = key
        .replace(/^\.\//, '')
        .replace(/\.default/, '')
        .replace(/\.json$/, '')

      translations[name] = locale
    })

    return translations
  }

  $t (payload) {
    let result = this.translations[this.locale]

    payload
      .split(/\.|\//g)
      .forEach(el => result = result[el])

    return result
  }
}

export {
  I18n
}