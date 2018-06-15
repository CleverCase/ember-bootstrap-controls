import Ember from 'ember';
import layout from '../../templates/components/modal/-header';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  showClose: {
    default: false,
    description: 'Indicates whether the header has a close button in the top left corner',
    type: PropTypes.bool,
  },
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  classNames: ['modal-header'],

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  actions: {
    closeModal() {
      let modalClose = this.get('modalClose')

      if (modalClose) {
        modalClose();
      }
    },
  }

});
