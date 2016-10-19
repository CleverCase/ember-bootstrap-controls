import Ember from 'ember';
import layout from '../templates/components/bootstrap-checkbox-group';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  layout: layout,

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,

  required: false,

  actions: {
    onChange(option, isChecked) {
      const selected = Ember.makeArray(this.get('selected'));

      if (isChecked) {
        this.get('onChange')(selected.concat(option), selected);
      } else {
        const index = selected.indexOf(option);
        selected.splice(index, 1);
        this.get('onChange')(selected, this.get('selected'));
      }
    }
  }
});