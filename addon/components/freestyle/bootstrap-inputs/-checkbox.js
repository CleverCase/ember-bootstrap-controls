import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-checkbox';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-checkbox';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: false,
    label: 'Sign Me Up!'
  }),

  basicValue: false,
  actions: {
    simpleClick(newValue, oldValue, eventArguments) {
      console.log(`Going from ${oldValue} to ${newValue} from Event: ${eventArguments}`)
    }
  },
});
