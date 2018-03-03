import Controller from '@ember/controller'

export default Controller.extend({
  controllerExternal: 0,
  controllerValue: 'foo',
  isCondition: false,

  actions: {
    changeValue () {
      if (this.get('controllerValue') === 'foo') {
        this.set('controllerValue', 'barr')
      } else {
        this.set('controllerValue', 'foo')
      }
    },

    changeExternal () {
      this.set('controllerExternal', this.get('controllerExternal') + 1)
    },

    external () {
      window.alert('External action')
    },

    toggleCondition () {
      this.toggleProperty('isCondition')
    }
  }
})
