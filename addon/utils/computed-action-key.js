import Ember from 'ember';
export default function computedActionKey(dependentActionKey) {
  var camelCaseActionKey = Ember.String.camelize(dependentActionKey);

  return Ember.computed(dependentActionKey, function() {
    return this.get(dependentActionKey) ? camelCaseActionKey : null;
  });
}
