import EmberObject from '@ember/object'
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import SlotsMixin from 'ember-block-slots/mixins/slots'

describe('SlotsMixin', function () {
  // Replace this with your real tests.
  it('works', function () {
    let SlotsObject = EmberObject.extend(SlotsMixin)
    let subject = SlotsObject.create()
    expect(subject).to.be.ok
  })
})
