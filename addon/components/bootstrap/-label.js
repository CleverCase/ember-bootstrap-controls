import Ember from 'ember';
import layout from '../../templates/components/bootstrap/-label';

export default Ember.Component.extend({
  layout,

  tagName: 'label',
  classNameBindings: ['srOnly:sr-only'],
  attributeBindings: ['for'],
});
