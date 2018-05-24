import Ember from 'ember';
import layout from '../../templates/components/modal/modal-footer';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  btnAcceptLabel: {
    default: 'Accept',
    description: 'The text used on the accept button of the modal',
    type: PropTypes.string,
  },
  btnAcceptStyle: {
    default: 'primary',
    description: 'Bootstrap style name of the accept button type',
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  },
  btnCloseLabel: {
    default: 'Close',
    description: 'The text used on the close button of the modal',
    type: PropTypes.string,
  },
  btnCloseStyle: {
    default: 'secondary',
    description: 'Bootstrap style name of the close button type',
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  },
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  tagName: '',

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
