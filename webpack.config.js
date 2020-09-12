const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dotenv = require('dotenv');
const fs = require('fs');

let mode;

const PATHS = {
  base: Path.join(__dirname),
  output: Path.join(__dirname, './dist'),
  source: Path.join(__dirname, './src'),
  fixed: ''
}

const setEnvVariables = () => {
  const envDefault = `${PATHS.base}/.env`
  let envPath = `${envDefault}.${mode}`;
  if (!fs.existsSync(envPath)) {
    envPath = envDefault;
  }
  const envParsed = dotenv.config({ path: envPath }).parsed;
  const envKeys = Object.keys(envParsed).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envParsed[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new Webpack.EnvironmentPlugin(Object.keys(envParsed).map(key => key)),
      new Webpack.DefinePlugin(envKeys)
    ]
  };
};

const commonConfigs = () => ({
  target: 'web',
  context: PATHS.source,
  output: {
    path: PATHS.output,
    publicPath: PATHS.fixed,
    filename: '[name].js',
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  entry: {
    main: './app/App.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux'
    ],
    styles: [
      './stylesheet/styles.scss'
    ]
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
    mainFields: ['browser', 'main'],
    alias: {
      '@app': Path.resolve(__dirname, './src/app/'),
      '@assets': Path.resolve(__dirname, './src/assets/'),
      '@config': Path.resolve(__dirname, './src/config/'),
      '@shared': Path.resolve(__dirname, './src/app/shared/'),
      '@core': Path.resolve(__dirname, './src/app/core'),
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        'robots.txt',
        'manifest.json'
      ],
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'assets',
    //     to: 'assets'
    //   },
    //   'robots.txt',
    //   'manifest.json'
    // ]),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ]
});

const loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include,
        exclude,
        use: 'ts-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  }
});

const loadDevCss = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include,
        exclude,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options
          },
          'sass-loader'
        ]
      }
    ]
  }
});

const loadProdCss = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include,
        exclude,
        use: [
          'style-loader', // Fallback
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
});

const loadOther = () => ({
  module: {
    rules: [
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.png$/, use: 'url-loader?limit=10000' },
      { test: /\.jpg$/, use: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['@svgr/webpack'] },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
    ]
  }
});

const baseConfigs = () => merge([
  commonConfigs(),
  loadJavaScript({ exclude: /node_modules/ }),
  loadOther(),
  // setEnvVariables(),
]);

const productionConfig = () => merge([
  {
    output: {
      filename: '[name].[contenthash].js',
    },
  },
  loadProdCss(),
]);

const developmentConfig = () => merge([
  loadDevCss({ options: { sourceMap: true }}),
  {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: PATHS.source,
      hot: true,
      host: "localhost",
      port: 3000,
      compress: true,
      inline: true,
      historyApiFallback: true,
      watchContentBase: true
    }
  }
]);

module.exports = (env) => {
  mode = env && env.NODE_ENV ? env.NODE_ENV : 'development';
  const modeConfigs = ( mode === 'production' ) ? productionConfig() : developmentConfig();
  return merge(baseConfigs(), modeConfigs, { mode });
};
