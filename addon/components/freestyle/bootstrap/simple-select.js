import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap/simple-select';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap/simple-select';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: 5,
    label: "How Cool Are You?"
  }),
  options: Array(10).fill().map((item, index) => 1 + index),
  mostFavorite: 1,
});
