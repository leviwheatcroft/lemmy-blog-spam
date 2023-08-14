import CopyPlugin from 'copy-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { join } from 'path'

const prodn = process.env.NODE_ENV === 'production'
const demo = process.env.DEMO === 'true'

export default {
  // profile: true,
  // stats: 'detailed',
  mode: prodn ? 'production' : 'development',
  entry: {
    index: join(process.cwd(), 'src/index.js'),
    ...demo ? { demo: join(process.cwd(), 'src/demo.js') } : {}
  },
  output: {
    path: join(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  },
  plugins: [
    ...demo ? [
      new CopyPlugin({
        patterns: [
          {
            from: join(process.cwd(), 'src/static'),
            to: ''
          }
        ]
      })
    ] : []
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
}
