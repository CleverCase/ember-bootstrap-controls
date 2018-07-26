import Ember from 'ember';
import { task, didCancel } from 'ember-concurrency';
import layout from '../templates/components/bootstrap-button';
import PropTypeMixin, { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend(PropTypeMixin, {
  layout,
  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['disabledButton:disabled', 'type', 'aria-label'],

  init() {
    Ember.Logger.warn('DEPRECATION: bootstrap-button component is being replaced by bootstrap/button in an upcoming version of ember-bootstrap-controls.');
    this._super(...arguments);
  },

  propTypes: {
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  },

  disabledButton: Ember.computed.or('asyncTask.isRunning', 'disabled'),

  asyncTask: task(function * (asyncTask) {
      return yield asyncTask();
  }).drop(),

  click() {
    return this.get('asyncTask').perform(this.get('action')).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
  },
});
