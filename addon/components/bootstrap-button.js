import Ember from 'ember';
import { task, didCancel } from 'ember-concurrency';
import layout from '../templates/components/bootstrap-button';
import PropTypeMixin, { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend(PropTypeMixin, {
  layout,
  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['disabledButton:disabled', 'type'],

  propTypes: {
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  },

  /* private attrs */
  _isRunning: false,

  disabledButton: Ember.computed.or('_isRunning', 'disabled'),

  asyncTask: task(function * (asyncTask) {
    this.set('_isRunning', true);

    try {
      return yield asyncTask();
    } finally {
      this.set('_isRunning', false);
    }
  }),

  click() {
    return this.get('asyncTask').perform(this.get('action')).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
  },
});
