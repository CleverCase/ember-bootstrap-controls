import Ember from 'ember';
import layout from '../templates/components/bootstrap-form';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'form',
  model: null,
  errors: null,

  submit: function(e) {
    var model = this.get('model');

    e.preventDefault();

    Ember.assert('Must pass a model to submit', model);
    this.sendAction('action', model);
  }
});
