import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn async-button',
  attributeBindings: ['type:type', '_isRunning:disabled', 'disabled:disabled'],

  type: 'button',
  disabled: null,

  /* private attrs */
  _isRunning: false,

  asyncTask: task(function * (asyncTask) {
    this.set('_isRunning', true);

    try {
      return yield asyncTask();
    } finally {
      this.set('_isRunning', false);
    }
  }),

  click() {
    return this.get('asyncTask').perform(this.get('action'));
  },
});
