const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js', // El punto de entrada es tu archivo JS
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS a un archivo separado
          'css-loader', 
          'sass-loader' // Compila Sass a CSS
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // Directorio de salida para las fuentes
              publicPath: 'fonts/'  // Directorio público para las fuentes
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Para manejar imágenes
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Directorio de salida para las imágenes
              publicPath: 'images/'  // Directorio público para las imágenes
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', // Inserta los scripts al final del body
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css', // Nombre del archivo CSS generado
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Carpeta para servir contenido
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    liveReload: true, // Recarga en vivo para cambios en archivos
  },
  mode: 'development',
};
