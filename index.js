module.exports = {
    app: (inject) => Object.assign(require('./src'), inject),
    thirdparty: (inject) => Object.assign(require('./thirdparty'), inject),
}
