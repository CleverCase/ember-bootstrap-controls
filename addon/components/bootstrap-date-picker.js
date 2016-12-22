import Ember from 'ember';
import layout from '../templates/components/bootstrap-date-picker';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  placeholder: null,
  value: null,
  type: null,
  changeDate: null,
  todayHighlight: true,
  format: 'mm/dd/yyyy',
  required: false,
});
