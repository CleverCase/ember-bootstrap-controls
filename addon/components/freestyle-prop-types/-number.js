import Ember from 'ember';
import layout from '../../templates/components/freestyle-prop-types/-number';

export default Ember.Component.extend({
  layout,
  dataValue: '',
  didReceiveAttrs() {
    this.set('dataValue', this.get(`data.${this.get('propDefinition.name')}`));
  },

  actions: {
    numberUpdated(value) {
      this.set('dataValue', value);
      this.set(`data.${this.get('propDefinition.name')}`, value)
    }
  },
});
