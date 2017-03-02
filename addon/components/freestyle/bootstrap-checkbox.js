import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-checkbox';

export default Ember.Component.extend({
  layout: layout,

  isChecked: true,
  isNotChecked: false,

  actions: {
    checkboxChange(newChecked, oldChecked) {
      //this.set('isChecked', newChecked)
      console.log(`Checkbox checked = ${newChecked}`);
      console.log(`isChecked = ${this.get('isChecked')}`);
    },
  },
});
