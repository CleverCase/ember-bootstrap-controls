import { or } from '@ember/object/computed';
import Component from '@ember/component';
import Ember from 'ember';
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

  init() {
    Ember.Logger.warn('DEPRECATION: bootstrap-button component is being replaced by bootstrap/button in an upcoming version of ember-bootstrap-controls.');
    this._super(...arguments);
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
