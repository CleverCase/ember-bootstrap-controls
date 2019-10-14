import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-currency-input';

export default Component.extend({
  layout: layout,

  value: null,
  disabled: false,
  clearMaskOnLostFocus: false
});
