import Ember from 'ember';

export function addNumbers(params) {
  let result = params[0];

  for (let i = 1; i < params.length; i++) {
    result = result + params[i];
  }
  return result;
}

export default Ember.Helper.helper(addNumbers);
