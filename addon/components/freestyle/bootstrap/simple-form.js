import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap/simple-form';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap/simple-form';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  init() {
    this._super(...arguments);
    this.set('basicString',''),
    this.set('basicNumber', 1),
    this.set('basicBoolean', false),
    this.set('basicDate', new Date()),
    this.set('radioOptions', Array(10).fill().map((item, index) => 1 + index)),
    this.set('radioValue', 1)
  },
});
