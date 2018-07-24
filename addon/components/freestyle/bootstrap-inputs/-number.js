import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-number';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-number';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Number Input',
  }),

  basicValue: '',
});
