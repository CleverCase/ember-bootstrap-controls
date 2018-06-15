import Ember from 'ember';
import layout from '../../../templates/components/freestyle/modal/-modal';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../modal/-modal';

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
      alert('freestyle: closeModal');
    },

    acceptModal() {
      alert('freestyle: acceptModal');
      this.set('isModalOpen', false);
    },

    openModal() {
      this.set('isModalOpen', true);
    },
  },
});
