import Ember from 'ember';
import layout from '../templates/components/bootstrap-power-select';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  layout: layout,

  classNames: ['form-group', 'bootstrap-power-select-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'showError:has-error'],

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,
  matcher: null,

  disabled: false,
  loadingMessage: 'Loading',
  renderInPlace: false,
  allowClear: true,
  search: null,
  searchEnabled: true,
  searchField: null,
  required: false,
  srOnly: null,
});
