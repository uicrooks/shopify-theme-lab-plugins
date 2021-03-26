<!-- logo (start) -->
<p align="center">
  <img src=".github/img/logo.svg" width="300px">
</p>
<!-- logo (end) -->

<!-- badges (start) -->
<p align="center">
  <img src="https://img.shields.io/github/package-json/v/uicrooks/shopify-theme-lab-i18n?color=%236e78ff">
</p>
<!-- badges (end) -->

<!-- title / description (start) -->
<h2 align="center">Shopify Theme Lab I18n</h2>

An I18n plugin for [Shopify Theme Lab](https://github.com/uicrooks/shopify-theme-lab). Use the same locale files from Shopify for your JavaScript or Vue files.
<!-- title / description (end) -->

## Requirements
Shopify Theme Lab >= `2.5.0`

## Installation

### npm
```sh
npm install @uicrooks/shopify-theme-lab-i18n
```

### yarn
```sh
yarn add @uicrooks/shopify-theme-lab-i18n
```

## Locales

Your locale files should be placed in the `shopify/locales` directory.

Upcoming examples assume you have the `shopify/locales/en.default.json` file with the following content:

```json
{
  "action": {
    "log_in": "Log in"
  }
}
```

## Translating JavaScript files

create `src/i18n.js` file with the following content:

```js
import { I18n } from '@uicrooks/shopify-theme-lab-i18n'

const i18n = new I18n()
const $t = i18n.$t

export {
  i18n,
  $t
}
```

Import the newly created `i18n` instance or the `$t` method in the file you want to translate. Call the `$t` method and pass the path to the translation as a string separated by dots:

```js
import { $t } from '@/i18n'

$t('action.log_in')
```

## Translating Vue files

in `src/main.js` add the i18n Vue plugin:

```js
import Vue from 'vue'
import { VuePlugin as i18n } from '@uicrooks/shopify-theme-lab-i18n'

Vue.use(i18n)
```

Inside Vue components you can now call the `$t` method:

```vue
<template>
  <div>
    {{ $t('action.log_in') }}
  </div>
</template>

<script>
export default {
  created () {
    this.$t('action.log_in')
  }
}
</script>
```