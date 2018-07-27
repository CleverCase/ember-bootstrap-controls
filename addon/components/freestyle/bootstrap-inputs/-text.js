import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-text';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-text';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Simple Text',
  }),

  basicValue: '',
});
