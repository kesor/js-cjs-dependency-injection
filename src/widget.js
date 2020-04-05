const { debug: createDebug } = require('../index').thirdparty()

class Widget {
    #log
    #name

    constructor(name) {
        this.#name = name
        this.#log = createDebug('widget')
    }

    printName() {
        this.#log(this.#name)
    }
}

module.exports = {
    Widget
}