import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-button';
import { task, timeout, didCancel, restartable } from 'ember-concurrency';
import PropTypeMixin, { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  fakeSimpleClickTask: task(function * (name) {
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
