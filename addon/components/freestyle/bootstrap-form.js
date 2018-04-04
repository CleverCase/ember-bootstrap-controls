import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-form';
import { task, timeout, didCancel, restartable } from 'ember-concurrency';

export default Ember.Component.extend({
  layout,

  fakeActionTask: task(function * () {
  }).restartable(),

  fakeSlowActionTask: task(function * () {
    yield timeout(1000);
  }).restartable(),

  actions: {
    simpleAction() {
      return this.get('fakeActionTask').perform().catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },

    slowAction() {
      return this.get('fakeSlowActionTask').perform().catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },
  },
});
