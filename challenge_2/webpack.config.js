const ENTRY_DIR = `${__dirname}/client/index.js`;
const OUTPUT_DIR = `${__dirname}/public`;
// require('@babel/polyfill');

module.exports = {
  entry: ['babel-polyfill', ENTRY_DIR],
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
