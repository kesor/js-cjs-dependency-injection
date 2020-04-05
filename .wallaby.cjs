module.exports = function (wallaby) {
  process.env.NODE_ENV = 'development';
  return {
    files: [
      'index.js',
      'src/**/*.js',
      'test/**/*.js',
      'thirdparty/**/*.js',
      '!test/**/*.test.js',
    ],
    tests: [
      'test/**/*.test.js'
    ],
    env: {
      type: 'node',
    },
  }
}
