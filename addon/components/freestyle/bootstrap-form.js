import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-form';
import { task, timeout, didCancel, restartable } from 'ember-concurrency';
import PropTypeMixin, { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  nickname: null,
  _persistedNickname: null,

  saveNicknameTask: task(function * (name) {
    this.set('_persistedNickname', name);
  }).restartable(),

  slowSaveNicknameTask: task(function * (name) {
    yield timeout(1000);
    this.set('_persistedNickname', name);
  }).restartable(),

  resetNickname: task(function * () {
    this.set('nickname', this.get('_persistedNickname'));
  }).restartable(),

  slowResetNickname: task(function * () {
    yield timeout(1000);
    this.set('nickname', this.get('_persistedNickname'));
  }).restartable(),

  actions: {
    simpleSave(name) {
      return this.get('saveNicknameTask').perform(name).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },

    slowSave(name) {
      return this.get('slowSaveNicknameTask').perform(name).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },

    simpleCancel() {
      return this.get('resetNickname').perform().catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },

    slowCancel() {
      return this.get('slowResetNickname').perform().catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    }
  },
});
