import Ember from 'ember';
import layout from '../templates/components/bootstrap-date-picker';

export const DATEPICKER_CLASS_NAME = 'bootstrap-date-picker-component';

export default Ember.Component.extend({
  tagName: '',
  classNames: [DATEPICKER_CLASS_NAME],
  layout: layout,

  todayHighlight: true,
  format: 'mm/dd/yyyy',
});
