import Ember from 'ember';
import layout from '../../../templates/components/freestyle/modal/modal-container';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../modal/modal-container';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  isModalOpen: false,
  sampleContent: 'Example Modal',

  actions: {
    closeModal() {
      console.log('freestyle: closeModal');
    },

    acceptModal() {
      console.log('freestyle: acceptModal');
    },

    openModal() {
      this.set('isModalOpen', true);
    },
  },
});
