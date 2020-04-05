const sinon = require('sinon')

const { debug: createDebug } = require('../index').thirdparty({ debug: sinon.stub() })
const { Widget } = require('../index').app()

describe('Widget', () => {
    it('should log the widget name using debug()', () => {
        const logger = sinon.stub()
        createDebug.onCall(0).returns(logger)
        new Widget('gizmo').printName()
        sinon.assert.calledWith(createDebug, 'widget')
        sinon.assert.calledWith(logger, 'gizmo')
    })
})
