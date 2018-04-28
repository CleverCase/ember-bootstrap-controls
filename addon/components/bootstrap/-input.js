import Ember from 'ember';

export default Ember.TextField.extend({
  classNames: ['form-control'],
  attributeBindings: ['focus-out', 'enter'],
});
