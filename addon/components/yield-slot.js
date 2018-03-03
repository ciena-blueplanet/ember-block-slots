import Component from '@ember/component'
import { computed } from '@ember/object'
import layout from '../templates/components/yield-slot'
import { PropTypes } from 'ember-prop-types'
import Slots from '../mixins/slots'

/**
 * {{yield-slot}} provides a target for {{block-slot}} content
 *
 * Yield slots may also have a default, specified using the {{else}} helper
 * as per https://guides.emberjs.com/v2.6.0/components/block-params/#toc_supporting-both-block-and-non-block-component-usage-in-one-template
 *
 * e.g.
 *
 * // my-component.hbs
 * {{yield}}
 *
 * {{#yield-slot 'foo'}}
 *   {{yield}}
 * {{else}}
 *   <div>Default</div>
 * {{/yield-slot}}
 *
 * when used without a {{#block-slot 'foo'}}
 *
 * // my-route.hbs
 * {{my-component}}
 *
 * would result in DOM
 *
 * <div>Default</div>
 */
const YieldSlotComponent = Component.extend({

  // == Component properties ==================================================

  layout,
  tagName: '',

  // == State properties ======================================================

  propTypes: {
    _blockParams: PropTypes.array,
    // TODO better validation message
    // https://github.com/ciena-blueplanet/ember-prop-types/issues/15
    _name: PropTypes.string.isRequired
  },

  // == Computed properties ===================================================

  // Use nearestOfType to determine the parent view, just in case there are
  // other components sandwiched between the block slot and the Slots mixin
  _parentView: computed(function () {
    return this.nearestOfType(Slots)
  }),

  // A yield slot is considered active if a block slot registered a matching
  // name against the parent component with the Slots mixin
  isActive: computed('_parentView._slots.[]', '_name', function () {
    return this.get('_parentView._slots').includes(this.get('_name'))
  })
})

YieldSlotComponent.reopenClass({
  positionalParams: [ '_name', '_blockParams' ]
})

export default YieldSlotComponent
