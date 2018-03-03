import { A } from '@ember/array'

import EmberObject from '@ember/object'
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

const slotObject = EmberObject.create({
  params: A(
    [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
  )
})

describeComponent.skip(
  'block-slot',
  'Integration: BlockSlotComponent',
  {
    integration: true
  },
  function () {
    it('All ten slots yield when "isSlotYield" is true', function () {
      this.set('slot', slotObject)

      this.render(hbs`
        {{#block-slot slot 'name' isSlotYield=true as |n0 n1 n2 n3 n4 n5 n6 n7 n8 n9|}}
          I am the numbers {{n0}} {{n1}} {{n2}} {{n3}} {{n4}} {{n5}} {{n6}} {{n7}} {{n8}} {{n9}}
        {{/block-slot}}
      `)

      expect(
        this.$().text().trim(),
        'All 10 slots are yielded'
      ).to.eql('I am the numbers 0 1 2 3 4 5 6 7 8 9')
    })

    it('No slots yield when "isSlotYield" is false', function () {
      this.set('slot', slotObject)

      this.render(hbs`
        {{#block-slot slot 'name' isSlotYield=false as |n0 n1 n2 n3 n4 n5 n6 n7 n8 n9|}}
          I am the numbers {{n0}} {{n1}} {{n2}} {{n3}} {{n4}} {{n5}} {{n6}} {{n7}} {{n8}} {{n9}}
        {{/block-slot}}
      `)

      expect(
        this.$('.frost-select .selected'),
        'No slots are yielded'
      ).to.have.length(0)
    })
  }
)
