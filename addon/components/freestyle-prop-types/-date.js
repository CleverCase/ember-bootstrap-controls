import Component from '@ember/component';
import layout from '../../templates/components/freestyle-prop-types/-date';

export default Component.extend({
  layout,
  dataValue: '',
  didReceiveAttrs() {
    this.set('dataValue', this.get(`data.${this.get('propDefinition.name')}`));
  },

  actions: {
    valueUpdated() {
      this.set(`data.${this.get('propDefinition.name')}`, this.get('dataValue'))
    }
  },
});
