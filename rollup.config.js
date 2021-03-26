import { babel } from '@rollup/plugin-babel'
const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/i18n.esm.js',
    format: 'es'
  },
  plugins: [
    isProduction && babel({
      babelHelpers: 'bundled',
      presets: [ '@babel/preset-env' ]
    })
  ]
}