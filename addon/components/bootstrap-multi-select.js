import Component from '@ember/component';
import layout from '../templates/components/bootstrap-multi-select';

export const MULTI_SELECT_CLASS_NAME = 'bootstrap-mutli-select-component';

export default Component.extend({
  layout: layout,

  classNames: [MULTI_SELECT_CLASS_NAME],

  /***
   * IMPORTANT:
   *   Optional power-select overrides should be set as `undefined` if we want
   *   to allow the property to be overridden but do not want to provide a
   *   default value and instead just use the ember-power-select default. Do
   *   not use `null`.
   ***/

  // Power select attributes
  selected: undefined,
  placeholder: undefined,
  options: undefined,
  onChange: undefined,
  matcher: undefined,
  loadingMessage: undefined,
  noMatchesMessage: undefined,
  disabled: undefined,
  renderInPlace: undefined,
  allowClear: true,
  search: undefined,
  searchEnabled: true,
  searchField: undefined,
  searchMessage: undefined,
  required: undefined,

  // Power select component attributes
  afterOptionsComponent: undefined,
  beforeOptionsComponent: undefined,
  optionsComponent: undefined,
  groupComponent: undefined,
  triggerComponent: undefined,
  searchMessageComponent: undefined,
  placeholderComponent: undefined,

  // Bootstrap attributes
  srOnly: undefined,
  label: undefined,
  errors: undefined
});
