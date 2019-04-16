import Component from '@ember/component';
import layout from '../../templates/components/modals/-modal';
import { task, didCancel } from 'ember-concurrency';
import { isPresent } from '@ember/utils';

export default Component.extend({
  layout,
  tagName: '',
  isOpen: false,
  title: null,
  size: null,

  onCloseTask: task(function * (modalCloseAction, asyncTask) {
    if(isPresent(asyncTask)) {
      const response = yield asyncTask();
      if(!response) {
        return false;
      }
    }
    return modalCloseAction();
  }),

  actions: {
    close(modalCloseAction) {
      return this.get('onCloseTask').perform(modalCloseAction, this.get('onHide')).catch(e => {
        if (!didCancel(e)) { throw e; }
      });
    },
  }
});
