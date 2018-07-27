import Component from '@ember/component';
import layout from '../templates/components/bootstrap-phone-mask-input';
import InputableMixin from '../mixins/components/inputable';
import asserIfUsingRenamedEvents from '../utils/assert-if-using-renamed-events';

export default Component.extend(InputableMixin, {
  classNames: ['form-group', 'bootstrap-input-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'showError:has-error'],
  layout: layout,

  placeholderChar: '_',
  placeholder: '(___) ___-____',
  value: null,
  readonly: null,
  type: null,
  srOnly: false,
  tabindex: 0,
  required: true,


  init() {
    this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this._super(...arguments);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    asserIfUsingRenamedEvents(this);
  },
});
