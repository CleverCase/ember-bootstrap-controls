import Ember from 'ember';
import layout from '../templates/components/bootstrap-textarea';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  layout: layout,

  placeholder: null,
  value: null,
  type: null,
  tabindex: 0,
  required: false,
});
