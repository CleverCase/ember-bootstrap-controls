import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap/simple-form';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap/simple-form';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  basicString: '',
  basicNumber: 1,
  basicBoolean: false,
  basicDate: new Date(),
  radioOptions: Array(10).fill().map((item, index) => 1 + index),
  radioValue: 1,
});
