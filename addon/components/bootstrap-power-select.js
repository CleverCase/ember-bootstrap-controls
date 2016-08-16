import Ember from 'ember';
import layout from '../templates/components/bootstrap-power-select';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  classNames: ['form-group', 'bootstrap-power-select-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'hasError:has-error'],
  layout: layout,

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,
  matcher: null,

  disabled: false,
  loadingMessage: 'Loading',
  allowClear: false,
  searchEnabled: false,
  searchField: null,
});
