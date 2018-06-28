import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-range';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-range';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: 1,
    label: 'range control',
  }),

  basicValue: 1,
});
