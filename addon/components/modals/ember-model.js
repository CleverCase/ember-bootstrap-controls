import Component from '@ember/component';
import layout from '../../templates/components/modals/ember-model';
import { alias, or } from '@ember/object/computed';
import { task, didCancel } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { isPresent, isBlank } from '@ember/utils';


export default Component.extend({
  layout,
  isSaving: alias('saveTask.isRunning'),
  isCanceling: alias('cancelTask.isRunning'),
  isRunningAsync: or('isSaving', 'isCanceling'),
  disableForm: or('isRunningAsync', 'disabled'),
  isNewModel: alias('model.isNew'),
  afterHidden: null,

  saveTask: task(function * (beforeSave, afterSave) {
    if (isPresent(beforeSave)) {
      const beforeSaveResponse = yield beforeSave();
      if (!beforeSaveResponse) {
        return false;
      }
    }
    const model = yield this.get('model');
    if (isBlank(model)) { return yield this.set('isOpen', false); }
    yield model.save();
    yield this.set('isOpen', false);

    if (isPresent(afterSave)) {
      return yield afterSave();
    } else {
      return true;
    }
  }),

  cancelTask: task(function * (afterCancel) {
    const model = yield this.get('model');
    if (isBlank(model)) { return yield this.set('isOpen', false); }
    const modelHasChanges = model.get('isDirty') || model.get('hasDirtyAttributes');
    if (!modelHasChanges || window.confirm('You have unsaved changes. Discard them?')) {
      if (typeof model.rollback === "function") {
        model.rollback();
      } else if (typeof model.rollbackAttributes === "function") {
        model.rollbackAttributes();
      }
      yield this.set('isOpen', false);
      if (isPresent(afterCancel)) {
        return yield afterCancel();
      } else {
        return true;
      }
    }
  }),

  didReceiveAttrs() {
    const model = this.get('model');
    if(isPresent(model) && typeof model.startTrack === "function") {
      model.startTrack();
    }
  },

  actions: {
    save() {
      return this.get('saveTask').perform(
        this.get('beforeSave'),
        this.get('afterSave')
      ).catch(e => {
        if (!didCancel(e)) { throw e; }
      });
    },

    close() {
      return this.get('cancelTask').perform(this.get('afterCancel')).catch(e => {
        if (!didCancel(e)) { throw e; }
      });
    },
  },
});
