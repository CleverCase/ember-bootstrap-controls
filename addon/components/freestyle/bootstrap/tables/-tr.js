import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap/tables/-tr';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap/tables/-tr';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  basicValue: '',
});
