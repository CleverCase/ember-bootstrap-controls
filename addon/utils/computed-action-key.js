import { computed } from '@ember/object';
import { camelize } from '@ember/string';
export default function computedActionKey(dependentActionKey) {
  var camelCaseActionKey = camelize(dependentActionKey);

  return computed(dependentActionKey, function() {
    return this.get(dependentActionKey) ? camelCaseActionKey : null;
  });
}
