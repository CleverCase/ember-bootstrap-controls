import Ember from 'ember';
import layout from '../templates/components/bootstrap-radio-button';

export default Ember.Component.extend({
  layout: layout,
  isChecked: false,

  didReceiveAttrs() {
    this.set('isChecked', this.get('option') === this.get('selected'))
  },
});
