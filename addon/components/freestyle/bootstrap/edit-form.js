import Ember from 'ember';
import layout from '../../../templates/components/freestyle/bootstrap/edit-form';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap/edit-form';
import { task, didCancel, restartable, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  basicValue: '',

  fakeActionTask: task(function * (text, delay) {
    yield timeout(delay);
    yield alert(text);
  }).restartable(),

  actions: {

    slowAction(delay, text) {
      return this.get('fakeActionTask').perform(text, delay).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },
  },
});
