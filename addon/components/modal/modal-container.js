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
};

export default Ember.Component.extend({

  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  attributeBindings: ['role'],
  classNames: 'modal',
  role: 'dialog',

  modalObj: Ember.computed(function() {
    return $('#' + Ember.guidFor(this));
  }),

  didUpdateAttrs() {
    this._super(...arguments);
    let isOpen = this.get('isOpen');
    let modalObj = this.get('modalObj');

    if (modalObj && modalObj.modal) {
      if (isOpen) {
        modalObj.modal("show");
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
