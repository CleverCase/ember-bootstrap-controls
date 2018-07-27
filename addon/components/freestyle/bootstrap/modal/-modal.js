import Component from '@ember/component';
import layout from '../../../../templates/components/freestyle/bootstrap/modal/-modal';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../../bootstrap/modal/-modal';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    title: 'Advanced Modal',
    body: 'Advanced Example Modal Body Text',
  }),

  isModalOpen: false,
  isModalOpenAdvanced: false,
  isModalOpenCustomSub: false,

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
      this.set('data.isOpen', false);
    },

    acceptModalCustomSub() {
      alert('freestyle: acceptModalCustomSub');
      this.set('isModalOpenCustomSub', false);
    },

    openModal() {
      this.set('isModalOpen', true);
    },

    openModalAdvanced() {
      this.set('data.isOpen', true);
    },

    openModalCustomSub() {
      this.set('isModalOpenCustomSub', true);
    },
  },
});
