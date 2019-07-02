import ButtonComponent from './-button';
import {
  BuilderForPropTypes,
  BuilderForPropDefaults
} from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from './-button';

const { buttonText } = propDefinitions;
const newButtonTextDefinitions = { ...buttonText, default: 'Cancel' };
const newPropDefinitions = Object.assign({}, propDefinitions, { buttonText: newButtonTextDefinitions });

export default ButtonComponent.extend({
  propTypes: BuilderForPropTypes(newPropDefinitions),
  classNames: ['btn-secondary'],

  getDefaultProps() {
    return BuilderForPropDefaults(newPropDefinitions)
  },
});
