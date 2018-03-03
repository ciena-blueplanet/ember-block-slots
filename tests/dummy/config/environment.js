/* eslint-env node */
'use strict'

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {}
  }

  switch (environment) {
    case 'production':
      ENV.rootURL = '/ember-block-slots'
      break

    case 'test':
      // Testem prefers this...
      ENV.rootURL = '/'
      ENV.locationType = 'none'

      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false
      ENV.APP.LOG_VIEW_LOOKUPS = false

      ENV.APP.rootElement = '#ember-testing'
      break
  }

  return ENV
}
