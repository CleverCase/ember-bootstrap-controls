import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-button';
import { task, timeout, didCancel } from 'ember-concurrency';
export default Component.extend({
  layout,
  fakeSimpleClickTask: task(function * (name) { // eslint-disable-line require-yield
    alert(`You clicked the ${name} button`);
  }).restartable(),

  fakeSlowClickTask: task(function * (name) {
    yield timeout(1000);
    alert(`You clicked the slow ${name} button`);
  }).restartable(),

  actions: {
    simpleClick(name) {
      return this.get('fakeSimpleClickTask').perform(name).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },
    slowClick(name){
      return this.get('fakeSlowClickTask').perform(name).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    }
  },
});
