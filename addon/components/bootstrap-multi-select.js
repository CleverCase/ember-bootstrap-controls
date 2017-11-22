import Ember from 'ember';
import layout from '../templates/components/bootstrap-multi-select';
import InputableMixin from '../mixins/components/inputable';

export const MULTI_SELECT_CLASS_NAME = 'bootstrap-mutli-select-component';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,

  disabled: false,
  loadingMessage: null,
  renderInPlace: false,
  allowClear: true,
  searchEnabled: false,
  searchField: null,
  required: false,

  multiSelectClassName: MULTI_SELECT_CLASS_NAME,
});
