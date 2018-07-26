import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-date';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-date';

export default Ember.Component.extend({
  layout,
  propDefinitions,

  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  basicValue: null,
});
