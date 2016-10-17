import Ember from 'ember';
import layout from '../templates/components/bootstrap-textarea';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  layout: layout,

  placeholder: null,
  value: null,
  type: null,
  labelColumns: 2,
  inputColumns: 10,
  tabindex: 0,
  required: false,

  labelColumnCss: Ember.computed('labelColumns', function() {
    var labelColumns = this.get('labelColumns');

    return `col-sm-${labelColumns}`;
  }),

  inputColumnCss: Ember.computed('inputColumns', function() {
    var inputColumns = this.get('inputColumns');

    return `col-sm-${inputColumns}`;
  })
});
