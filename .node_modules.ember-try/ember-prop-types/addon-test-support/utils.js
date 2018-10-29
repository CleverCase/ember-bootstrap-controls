import Ember from 'ember'
const {VERSION} = Ember

/**
 * Determine if we are on a version of Ember that includes Glimmer 2
 * @returns {Boolean} whether or not we are on Glimmer 2
 */
function isGlimmer2 () {
  const [major, minor] = VERSION.split('.')
  return parseInt(major) > 1 && parseInt(minor) > 9
}

/**
 * Programitcally instantiate instance of component class
 * @param {Ember.Component} component - component class to instantiate
 * @returns {Ember.Component} instance of component class
 */
export function createComponent (component) {
  if (isGlimmer2()) {
    return component.create({renderer: {}})
  }

  return component.create()
}
