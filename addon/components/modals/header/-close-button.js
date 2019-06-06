import layout from '../../../templates/components/modals/header/-close-button';
import ButtonComponent from '../../bootstrap/buttons/-button';

export default ButtonComponent.extend({
  layout,
  classNames: ['close'],
  attributeBindings: ['type', 'data-dismiss',  'aria-label'],
  type: 'button',
  'data-dismiss': 'modal',
  'aria-label': 'close',
});
