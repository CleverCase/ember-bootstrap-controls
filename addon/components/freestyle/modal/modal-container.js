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

  actions: {
    closeModal() {
      this.set('isModalOpen', false);
    },

    openModal() {
      this.set('isModalOpen', true);
    },
  },
});
