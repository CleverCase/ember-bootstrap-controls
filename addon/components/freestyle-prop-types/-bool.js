import Component from '@ember/component';
import layout from '../../templates/components/freestyle-prop-types/-bool';

export default Component.extend({
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
