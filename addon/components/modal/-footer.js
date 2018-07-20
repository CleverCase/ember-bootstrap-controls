import Ember from 'ember';
import layout from '../../templates/components/modal/-footer';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  btnAcceptLabel: {
    default: 'Accept',
    description: 'The text used on the accept button of the modal',
    type: PropTypes.string,
  },
  btnCloseLabel: {
    default: 'Close',
    description: 'The text used on the close button of the modal',
    type: PropTypes.string,
  },
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),
  classNames: ['modal-footer'],

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
