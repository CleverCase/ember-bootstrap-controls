import Ember from 'ember';
import layout from '../templates/components/bootstrap-multi-select';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  layout: layout,

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,

  disabled: false,
  loadingMessage: null,
  renderInPlace: false,
  allowClear: false,
  searchEnabled: false,
  searchField: null,
  required: false,
});