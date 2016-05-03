import Ember from 'ember';
import layout from '../templates/components/bootstrap-power-select';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  classNames: ['form-group', 'bootstrap-input-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'hasError:has-error'],
  layout: layout,

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,

  loadingMessage: null,
  allowClear: false,
  searchEnabled: false,
  searchField: null,
});
