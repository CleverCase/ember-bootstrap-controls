import Ember from 'ember';
import layout from '../templates/components/bootstrap-checkbox-button';

export default Ember.Component.extend({
  layout: layout,
  isChecked: false,
  isNotChecked: Ember.computed('isChecked', function() {
    return !this.get('isChecked');
  }),

  didReceiveAttrs() {
    let selected = Ember.makeArray(this.get('selected'));
    this.set('isChecked', selected.includes(this.get('option')));
  },
});
