import Ember from 'ember';

export function concatClassNames([classNames = []]/*, hash*/) {
  if (classNames.join) {
    return classNames.join(' ');
  }

  return classNames;
}

export default Ember.Helper.helper(concatClassNames);
