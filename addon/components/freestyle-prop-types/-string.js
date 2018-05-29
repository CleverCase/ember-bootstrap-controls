import Ember from 'ember';
import layout from '../../templates/components/freestyle-prop-types/-string';

export default Ember.Component.extend({
  layout,
  dataValue: '',
  didReceiveAttrs() {
    this.set('dataValue', this.get(`data.${this.get('propDefinition.name')}`));
  },

  actions: {
    stringUpdated(value) {
      this.set('dataValue', value);
      this.set(`data.${this.get('propDefinition.name')}`, value)
    }
  },
});
