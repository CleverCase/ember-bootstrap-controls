import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-time';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-time';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Time',
  }),

  basicValue: '',
});
