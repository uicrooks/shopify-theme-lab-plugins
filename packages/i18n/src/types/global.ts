declare global {
  interface Window {
    Shopify: {
      locale: string
    }
  }
}

export interface I18nOptions {
  fallbackLocale?: string
}

export interface Translations {
  [key: string]: {} | string
}

export interface AllTranslations {
  [key: string]: Translations
}