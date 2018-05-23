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
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  tagName: '',

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
