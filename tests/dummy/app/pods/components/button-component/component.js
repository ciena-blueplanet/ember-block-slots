import Component from '@ember/component'

export default Component.extend({
  attributeBindings: [
    'type',
    'value'
  ],
  tagName: 'input',
  type: 'button',
  value: 'Toggle conditional slot',

  click () {
    this.onClick()
  }
})
