import ButtonComponent from './-button';
import layout from '../../../templates/components/bootstrap/buttons/export-button';
import { propDefinitions } from './-button';
import {
  BuilderForPropTypes,
  BuilderForPropDefaults
} from 'ember-bootstrap-controls/utils/prop-definition-tools';

const { buttonText } = propDefinitions;
const newButtonTextDefinitions = { ...buttonText, default: 'Export' };
const newPropDefinitions = Object.assign({}, propDefinitions, { buttonText: newButtonTextDefinitions });

export default ButtonComponent.extend({
  layout,
  propTypes: BuilderForPropTypes(newPropDefinitions),
  classNames: ['btn-primary'],
  
  getDefaultProps() {
    return BuilderForPropDefaults(newPropDefinitions)
  },
});
