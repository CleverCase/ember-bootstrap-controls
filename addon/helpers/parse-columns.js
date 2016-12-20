import Ember from 'ember';

export function parseColumns(params/*, hash*/) {
  let record = params[0];
  let attrName = params[1];

  let result = record.get(attrName);

  return new Ember.Handlebars.SafeString(result);
}

export default Ember.Helper.helper(parseColumns);
