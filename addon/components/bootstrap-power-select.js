import Ember from 'ember';
import layout from '../templates/components/bootstrap-power-select';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

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
  searchEnabled: false,
  searchField: null,
  required: false,
  srOnly: null,
});
