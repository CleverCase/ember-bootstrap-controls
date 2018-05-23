import Ember from 'ember';
import layout from '../../templates/components/modal/modal-footer';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  acceptBtnLabel: {
    default: 'Accept',
    description: 'The text used on teh accept button of the modal',
    type: PropTypes.string,
  },
  btnStyle: {
    default: 'primary',
    description: 'Bootstrap style name of teh button type',
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  },
  hasWrappingForm: {
    default: false,
    description: 'Indicates that a wrapping form is being used.',
    type: PropTypes.bool,
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
