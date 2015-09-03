import Ember from 'ember';
import layout from '../templates/components/bootstrap-input';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  classNames: ['form-group', 'bootstrap-input-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'hasError:has-error'],
  layout: layout,
  placeholder: null,
  value: null,
  checked: null,
  readonly: null,
  type: null,
  labelColumns: 2,
  inputColumns: 10,
  hasColumns: null,
  srOnly: null,
  customLabelCss: null,

  checkboxType: Ember.computed('type', function() {
    return this.get('type') === 'checkbox'
  }),

  labelColumnCss: Ember.computed('labelColumns', function() {
    var labelColumns = this.get('labelColumns');

    return `col-sm-${labelColumns}`;
  }),

  inputColumnCss: Ember.computed('inputColumns', function() {
    var inputColumns = this.get('inputColumns');

    return `col-sm-${inputColumns}`;
  })
});
