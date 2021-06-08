<!-- logo (start) -->
<p align="center">
  <img src=".github/img/logo-i18n.svg" width="300px">
</p>
<!-- logo (end) -->

<!-- title / description (start) -->
<h2 align="center">Shopify Theme Lab I18n</h2>

An I18n plugin for [Shopify Theme Lab](https://github.com/uicrooks/shopify-theme-lab). Use the same locale files from Shopify for your JavaScript or Vue files.
<!-- title / description (end) -->

<!-- requirements (start) -->
## Requirements
Shopify Theme Lab >= `3.0.0`
<!-- requirements (end) -->

<!-- installation (start) -->
## Installation

### npm
```sh
npm install shopify-theme-lab-i18n
```

### yarn
```sh
yarn add shopify-theme-lab-i18n
```
<!-- installation (end) -->

<!-- locales (start) -->
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
<!-- locales (end) -->

<!-- translation javascript files (start) -->
## Translating JavaScript files

create `src/i18n.js` file with the following content:

```js
import { I18n } from 'shopify-theme-lab-i18n'

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
<!-- translation javascript files (end) -->

<!-- translation vue files (start) -->
## Translating Vue files

in `src/main.js` add the i18n Vue plugin:

```js
import { createApp } from 'vue'
import { VuePlugin as i18n } from 'shopify-theme-lab-i18n'

const app = createApp({})
app.use(i18n)
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
<!-- translation vue files (end) -->