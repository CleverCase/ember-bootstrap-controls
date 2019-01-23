import { or } from '@ember/object/computed';
import Component from '@ember/component';
import { task, didCancel } from 'ember-concurrency';
import layout from '../templates/components/bootstrap-button';
import PropTypeMixin, { PropTypes } from 'ember-prop-types';

export default Component.extend(PropTypeMixin, {
  layout,
  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['disabledButton:disabled', 'type', 'aria-label'],
  propTypes: { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  },

  disabledButton: or('asyncTask.isRunning', 'disabled'),

  asyncTask: task(function * (asyncTask) {
      return yield asyncTask();
  }).drop(),

  click(e) {
    e.preventDefault();
    return this.get('asyncTask').perform(this.get('action')).catch(error => {
      if (!didCancel(error)) {
        throw error;
      }
    });
  },
});
