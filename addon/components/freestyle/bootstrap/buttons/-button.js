import Component from '@ember/component';
import layout from '../../../../templates/components/freestyle/bootstrap/buttons/-button';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../../bootstrap/buttons/-button';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  basicValue: '',
  disabled: true,
  buttonText: 'Test',
  actions: {
    simpleAction() {

    },
  },
});
