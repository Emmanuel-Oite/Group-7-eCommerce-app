const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      http: 'stream-http',
      https: 'https-browserify',
    },
  },
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url/'),
      assert: require.resolve('assert/'),
    },
  },
};
