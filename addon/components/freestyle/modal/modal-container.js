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
  isModalOpenAdvanced: false,
  isModalOpenCustomSub: false,

  sampleContent: 'Example Modal',

  actions: {
    closeModal() {
      alert('freestyle: closeModal');
    },

    closeModalAdvanced() {
      alert('freestyle: closeModalAdvanced');
    },

    closeModalCustomSub() {
      alert('freestyle: closeModalCustomSub');
      this.set('isModalOpenCustomSub', false);
    },

    acceptModal() {
      alert('freestyle: acceptModal');
      this.set('isModalOpen', false);
    },

    acceptModalAdvanced() {
      alert('freestyle: acceptModalAdvanced');
      this.set('isModalOpenAdvanced', false);
    },

    acceptModalCustomSub() {
      alert('freestyle: acceptModalCustomSub');
      this.set('isModalOpenCustomSub', false);
    },

    openModal() {
      this.set('isModalOpen', true);
    },

    openModalAdvanced() {
      this.set('isModalOpenAdvanced', true);
    },

    openModalCustomSub() {
      this.set('isModalOpenCustomSub', true);
    },
  },
});
