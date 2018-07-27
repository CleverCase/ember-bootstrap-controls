import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap/radio-group';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap/radio-group';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: 1,
    label: "How Cool Are You?"
  }),
  options: Array(10).fill().map((item, index) => 1 + index),
  mostFavorite: 1,
  leastFavorite: 2,
  customChild: 5,
});
