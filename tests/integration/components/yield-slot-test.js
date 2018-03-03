import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent.skip(
  'yield-slot',
  'Integration: YieldSlotComponent',
  {
    integration: true
  },
  function () {
    it('Main slot yields', function () {
      this.render(hbs`
        {{#yield-slot 'header' isSlotActive=true}}
          Some yielded text
        {{else}}
          Default yielded text
        {{/yield-slot}}
      `)

      expect(
        this.$().text().trim(),
        'Text shows in the main yielded'
      ).to.eql('Some yielded text')
    })

    it('Inverse slot yields', function () {
      this.render(hbs`
        {{#yield-slot 'header' isSlotActive=false}}
          Some yielded text
        {{else}}
          Default yielded text
        {{/yield-slot}}
      `)

      expect(
        this.$().text().trim(),
        'Text shows in the default yield'
      ).to.eql('Default yielded text')
    })
  }
)
