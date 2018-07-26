import Ember from 'ember';
import layout from '../../../templates/components/bootstrap/modal/-modal';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { task } from 'ember-concurrency';

export const propDefinitions = {
  isOpen: {
    default: false,
    description: 'toggles the dialog as open or closed',
    type: PropTypes.bool,
  },
  centered: {
    default: false,
    description: 'set the class of the dialog to be centered vertically on the screen',
    type: PropTypes.bool,
  },
  fade: {
    default: false,
    description: 'use the fade in and out visual for the modal',
    type: PropTypes.bool,
  },
  title: {
    default: '',
    description: 'The top level title for the modal dialog',
    type: PropTypes.string.isRequired,
  },
  body: {
    description: 'The text used for the body of the modal',
    type: PropTypes.string,
  },
  acceptAction: {
    default: null,
    description: 'The callback function for the modal.',
    type: PropTypes.func,
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
  closeOnEsc: {
    default: false,
    description: 'Indicates whether the modal closes using the keyboard escape key',
    type: PropTypes.bool,
  },
  backdrop: {
    default: "true",
    description: "Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.",
    type: PropTypes.string,
  },
};

export default Ember.Component.extend({

  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  ariaHidden: "true",
  attributeBindings: ['role', 'labelId:aria-labelledby', 'ariaHidden:aria-hidden'],
  classNameBindings: ['fade'],
  classNames: 'modal',
  role: 'dialog',
  fade: false,
  centered: false,
  closeOnEsc: false,
  backdrop: "true",

  didRender() {
    this._super(...arguments);
    let compRef = this;
    let modalObj = this.get('modalObj');

    modalObj.on('hidden.bs.modal', function (e) {
      compRef.set('isOpen', false);
    });
  },

  modalObj: Ember.computed(function() {
    return $('#' + Ember.guidFor(this));
  }),

  didUpdateAttrs() {
    this._super(...arguments);
    let isOpen = this.get('isOpen');
    let closeOnEsc = this.get('closeOnEsc');
    let backdrop = this.get('backdrop');
    let modalObj = this.get('modalObj');

    if (modalObj && modalObj.modal) {
      if (isOpen) {
        modalObj.modal({
          backdrop: (backdrop == "true" || backdrop == "false") ? (backdrop == "true") : backdrop,
          keyboard: closeOnEsc,
          "show": true
        });
      }
      else {
        modalObj.modal("hide");
      }
    }
  },

  closeModalTask: task(function * () {
    const takeAction = this.get('closeAction');
    let rval;

    if (takeAction) {
      rval = yield takeAction();
    }

    this.set('isOpen', false);

    return rval;
  }),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  actions: {
    closeAction() {
      return this.get('closeModalTask').perform();
    },

    toggleModal() {
      this.toggleProperty('isOpen');
    }
  }
});
