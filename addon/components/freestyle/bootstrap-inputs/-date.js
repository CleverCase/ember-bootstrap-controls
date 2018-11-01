import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-date';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-date';

export default Component.extend({
  layout,
  propDefinitions,

  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: new Date(),
  }),
});
