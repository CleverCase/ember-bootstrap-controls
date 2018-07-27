import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-form';
import { task, timeout, didCancel } from 'ember-concurrency';

export default Component.extend({
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
