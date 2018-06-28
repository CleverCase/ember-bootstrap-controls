import Ember from 'ember';
import layout from '../../templates/components/freestyle-prop-types/-bool';

export default Ember.Component.extend({
  layout,
  dataValue: '',
  didReceiveAttrs() {
    this.set('dataValue', this.get(`data.${this.get('propDefinition.name')}`));
  },
  actions: {
    booleanUpdated(value) {
      this.set(`data.${this.get('propDefinition.name')}`, value)
    }
  },
});
