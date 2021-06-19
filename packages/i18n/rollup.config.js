import del from 'rollup-plugin-delete'
import typescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/i18n.esm.js',
    format: 'es'
  },
  plugins: [
    del({ targets: 'dist/*' }),
    typescript({
      tsconfig: './tsconfig.json',
      ... isProduction && {
        declaration: true,
        declarationDir: 'types'
      }
    }),
    isProduction && babel({
      babelHelpers: 'bundled',
      presets: [ '@babel/preset-env' ]
    })
  ]
}