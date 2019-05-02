import Component from '@ember/component';
import ButtonComponent from '../../bootstrap-button';

export default ButtonComponent.extend({
  classNames: ['close'],
  attributeBindings: ['type', 'data-dismiss',  'aria-label'],
  type: 'button',
  'data-dismiss': 'modal',
  'aria-label': 'close',
});
