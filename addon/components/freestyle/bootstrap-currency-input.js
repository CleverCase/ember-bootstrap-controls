import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-currency-input';

export default Component.extend({
  layout: layout,

  value: null,
  inputId: 1,
  disabled: false,
  showMaskOnHover: false,
  showMaskOnFocus: false,
});
