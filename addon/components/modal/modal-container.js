import Ember from 'ember';
import layout from '../../templates/components/modal/modal-container';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { task } from 'ember-concurrency';

export const propDefinitions = {
  isOpen: {
    default: false,
    description: 'toggles the dialog as open or closed',
    type: PropTypes.bool,
  },
  title: {
    default: '',
    description: 'The top level title for the modal dialog',
    type: PropTypes.string.isRequired,
  },
  acceptAction: {
    default: null,
    description: 'The callback function for the modal.',
    type: PropTypes.func.isRequired,
  },
  closeAction: {
    default: null,
    description: 'The callback function for the close action.',
    type: PropTypes.func,
  },
  showCloseInHeader: {
    default: false,
    description: 'Indicates whether the header has a close button in the top left corner',
    type: PropTypes.bool,
  },
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  tagName: '',

  modalId: Ember.computed(function() {
    return `${Ember.guidFor(this)}_modal`;
  }),

  modalObj: Ember.computed(function() {
    return $('#' + this.get('modalId'));
  }),

  didRender() {
    const com_ref = this;
    let modalObj = com_ref.get('modalObj');

    com_ref._super(...arguments);
    //t his is a failsafe to catch situations when the elements use [data-dismiss="modal"]
    modalObj.on('hidden.bs.modal', function (e) {
      if (com_ref.get('isOpen')) {
        com_ref.get('closeModalTask').perform();
      }
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let isOpen = this.get('isOpen');

    if (this.get('isOpen')) {
      let modalObj = this.get('modalObj');
      if (modalObj && isOpen) {
        modalObj.modal("show");
      }
      else {
        modalObj.modal("hide");
      }
    }
  },

  closeModalTask: task(function * () {
    const closeAction = this.get('closeAction');
    let rval;

    if (closeAction) {
      rval = yield closeAction();
    }
    this.set('isOpen', false);
    return rval;
  }),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  actions: {
    closeModal() {
      return this.get('closeModalTask').perform();
    },

    toggleModal() {
      Ember.Logger.warn('`toggle` on `{{modal/modal-container}}` is deprecated and will be removed');
      this.toggleProperty('isOpen');
    }
  }
});
