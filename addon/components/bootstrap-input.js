import Ember from 'ember';
import layout from '../templates/components/bootstrap-input';
import InputableMixin from '../mixins/components/inputable';
import asserIfUsingRenamedEvents from '../utils/assert-if-using-renamed-events';

export default Ember.Component.extend(InputableMixin, {
  layout: layout,
  classNames: ['form-group', 'bootstrap-input-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'showError:has-error'],
  placeholder: null,
  value: null,
  readonly: null,
  type: null,
  srOnly: null,
  tabindex: 0,
  required: false,

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.get('type') === 'checkbox') {
      Ember.assert("A type of 'checkbox' is not supported. Use  bootstrap-checkbox instead");
    }

    asserIfUsingRenamedEvents(this);
  }
});
