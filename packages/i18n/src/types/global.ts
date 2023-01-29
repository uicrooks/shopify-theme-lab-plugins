interface Window {
  Shopify: {
    locale: string,
    Checkout: {
      normalizedLocale: string
    }
  }
}

interface I18nOptions {
  fallbackLocale?: string
}

interface Translations {
  [key: string]: {} | string
}

interface AllTranslations {
  [key: string]: Translations
}