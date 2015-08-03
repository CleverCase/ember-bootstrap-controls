import Ember from 'ember';
import layout from '../templates/components/bootstrap-selectize';
import InputableMixin from '../mixins/component/inputable';

export default Ember.Component.extend(InputableMixin, {
  classNames: ['form-group', 'bootstrap-selectize-component']
  isSrOnly: false,
  selectOnTab: true,
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'hasError:has-error '],
  plugins: 'remove_button',
  labelColumns: 2,
  inputColumns: 10,

  classNames: ['bootstrap-selectize-component', 'form-group'],

  createItem: computedActionKey('create-item'),
  updateFilter: computedActionKey('update-filter'),
  selectItem: computedActionKey('select-item'),
  addItem: computedActionKey('add-item'),
  removeItem: computedActionKey('remove-item'),

  labelColumnCss: Ember.computed('labelColumns', function() {
    var labelColumns = this.get('labelColumns');

    return `col-sm-${labelColumns}`;
  }),

  inputColumnCss: Ember.computed('inputColumns', function() {
    var inputColumns = this.get('inputColumns');

    return `col-sm-${inputColumns}`;
  })

  actions: {
    createItem: function() {
      this.sendAction('create-item', ...arguments);
    },

    updateFilter: function() {
      this.sendAction('update-filter', ...arguments);
    },

    selectItem: function() {
      this.sendAction('select-item', ...arguments);
    },

    addItem: function() {
      this.sendAction('add-item', ...arguments);
    },

    removeItem: function() {
      //this.sendAction('remove-item', arguments);
    }
  }
});
