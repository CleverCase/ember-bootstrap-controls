import Ember from 'ember';
import { task } from 'ember-concurrency';
import layout from '../templates/components/bootstrap-button';
import PropTypeMixin, { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['_isRunning:disabled', 'type', 'disabled:disabled'],

  propTypes: {
    action: PropTypes.func.isRequired,
  },

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
