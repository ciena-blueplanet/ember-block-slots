import { computed } from '@ember/object'
import Component from '@ember/component'
import SlotsMixin from 'ember-block-slots'

export default Component.extend(SlotsMixin, {
  computedValue: computed('value', function () {
    const value = this.get('value')
    return `"${value}" is ${value.length} chars`
  }),

  actions: {
    internal () {
      window.alert('internal action')
    }
  }
})
