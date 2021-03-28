<!-- logo (start) -->
<p align="center">
  <img src=".github/img/logo.svg" width="350px">
</p>
<!-- logo (end) -->

<!-- title / description (start) -->
<h2 align="center">Shopify Theme Lab Reloader</h2>

Plugin for reloading a remote Shopify theme during development. It's included by default in [Shopify Theme Lab](https://github.com/uicrooks/shopify-theme-lab).
<!-- title / description (end) -->

<!-- how it works (start) -->
## How it works
The `server.js` script runs an HTTP server, as well as a WebSocket server, locally. The HTTP server listens for requests, sent from the `shopify:watch` task (which is the default Shopify Them Kit [watch task](https://shopify.dev/tools/theme-kit/command-reference#watch)) and communicates via WebSocket connection with the `client.js` scripts.

The `client.js` scripts listen for reload messages sent from the `server.js` script and reload the pages when needed.

If the connection between a client and server is lost, the client tries every couple of seconds to reconnect to the server.
<!-- how it works (end) -->

<!-- installation (start) -->
## Installation

### npm
```sh
npm install shopify-theme-lab-reloader
```

### yarn
```sh
yarn add shopify-theme-lab-reloader
```
<!-- installation (end) -->

<!-- setup (start) -->
## Setup
Use one of the following methods.

### Webpack
Include the `client.autoload.js` script in the `entry` array of `webpack.dev.js`:

```js
{
  entry: [
    ...
    path.resolve(__dirname, '../../node_modules/shopify-theme-lab-reloader/client.autoload')
  ]
}
```

### JavaScript
Include the `client.js` script in one of the JavaScript files and initialize the client:

```js
import ReloaderClient from 'shopify-theme-lab-reloader/client'
if (process.env.NODE_ENV === 'development') new ReloaderClient()
```

## Package.json
Your `package.json` file should look something like this:

```json
{
  "config": {
    "reloader": {
      "serverPort": 5000,
      "webSocketPort": 5050,
      "delay": 2000,
      "indicator": true
    }
  },
  "scripts": {
    "start": "npm-run-all --parallel --silent --race dev reloader shopify:watch",
    "reloader": "node node_modules/shopify-theme-lab-reloader",
    "shopify:watch": "cross-env-shell shopify-themekit watch --env=dev --allow-live --config .config/shopify/shopify.dev.yml --notify=http://localhost:$npm_package_config_reloader_serverPort/reload"
  }
}
```
<!-- setup (end) -->

<!-- settings (start) -->
## Settings
Settings and ports for the plugin can be adjusted in the `package.json` file of your Theme Lab project.

| Option | Description | Possible values | Default value |
| - | - | - | - |
| serverPort | the localhost port `shopify:watch` task and `server` use to communicate | Number | 5000 |
| websocketPort | the localhost port `server` and `clients` use to communicate | Number | 5050 |
| delay | auto-reload needs a slight delay before reloading the remote site, so all newly uploaded files will be loaded. Values between `1600`ms and `2000`ms seem to work well | Number | 2000 |
| indicator | display a visual status indicator on your page when the connection changes | true / false / "light" | false |
<!-- settings (end) -->