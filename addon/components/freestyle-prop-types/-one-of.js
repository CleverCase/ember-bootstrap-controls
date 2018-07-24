import Component from '@ember/component';
import layout from '../../templates/components/freestyle-prop-types/-one-of';

export default Component.extend({
  layout,
  dataValue: '',

  init() {
    this.options = [];
    this._super(...arguments);
  },

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
