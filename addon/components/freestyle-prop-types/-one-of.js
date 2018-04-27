import Ember from 'ember';
import layout from '../../templates/components/freestyle-prop-types/-one-of';

export default Ember.Component.extend({
  layout,
  dataValue: '',
  options: [],
  didReceiveAttrs() {
    this.set('options', this.get('propDefinition.type.valueOptions'));
    this.set('dataValue', this.get(`data.${this.get('propDefinition.name')}`));
  },

  actions: {
    optionSelected(value) {
      this.set('dataValue', value);
      this.set(`data.${this.get('propDefinition.name')}`, value)
    }
  },
});
