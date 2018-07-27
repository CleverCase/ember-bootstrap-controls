import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-floating-label-input';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-floating-label-input';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Advanced Example',
  }),

  basicValue: '',
});
