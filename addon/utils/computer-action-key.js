import Ember from 'ember';
export default function computerActionKey(dependentActionKey) {
  var camelCaseActionKey = dependentActionKey.camelize();

  return Ember.computed(dependentActionKey, function() {
    return this.get(dependentActionKey) ? camelCaseActionKey : null;
  });
}
