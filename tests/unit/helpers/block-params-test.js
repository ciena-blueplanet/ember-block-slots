import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import {
  blockParams
} from 'ember-block-slots/helpers/block-params'

describe.skip(
  'Unit: BlockParamsHelper',
  function () {
    it('"blockParams()" returns an object with a property "params" that is an "Array"', function () {
      const arrayParameter = [ '0', '1', '2' ]

      const result = blockParams(arrayParameter)

      expect(
        result,
        '"Returns an "Object" with a property "params" of type "Array"'
      ).to.have.property('params').that.is.an('array')

      expect(
        result,
        'First array element is set'
      ).to.have.deep.property('params[0]', '0')

      expect(
        result,
        'Second array element is set'
      ).to.have.deep.property('params[1]', '1')

      expect(
        result,
        'Third array element is set'
      ).to.have.deep.property('params[2]', '2')
    })
  }
)
