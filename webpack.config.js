// import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { join } from 'path'

const prodn = process.env.NODE_ENV === 'production'

export default {
  // profile: true,
  // stats: 'detailed',
  mode: prodn ? 'production' : 'development',
  entry: {
    index: join(process.cwd(), 'src/index.js')
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
          // MiniCssExtractPlugin.loader,
          // 'vue-style-loader',
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {}
                  ],
                  [
                    'tailwindcss',
                    {
                      content: [
                        join(process.cwd(), 'src/templates/**/*.handlebars')
                      ]
                    }
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({ filename: '[name].css' }),
    ...prodn ? [] : [
      new CopyPlugin({
        patterns: [
          {
            from: join(process.cwd(), 'src/static'),
            to: ''
          }
        ]
      })
    ]
  ],
  optimization: {
    ...prodn ?
      {
        minimizer: [
          '...',
          // new CssMinimizerPlugin()
        ]
      } :
      {}
  }
}
