import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-tel';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-tel';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Telephone',
  }),

  basicValue: '',
});
