import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { task, didCancel } from 'ember-concurrency';
import layout from '../../../../../templates/components/bootstrap/tables/body/row/-actions';

export default Component.extend({
  layout,
  tagName: 'td',
  archiveEnabled: notEmpty('onArchive'),
  editEnabled: notEmpty('onEdit'),
  showEnabled: notEmpty('onShow'),
  deleteEnabled: notEmpty('onDelete'),

  asyncTask: task(function * (asyncTask, rowData) {
    return yield asyncTask(rowData);
  }).drop(),

  actions: {
    onShow(rowData) {
      return this.get('asyncTask').perform(this.get('onShow'), rowData).catch(error => {
        if (!didCancel(error)) { throw error; }
      });
    },
    onEdit(rowData) {
      return this.get('asyncTask').perform(this.get('onEdit'), rowData).catch(error => {
        if (!didCancel(error)) { throw error; }
      });
    },
    onArchive(rowData) {
      return this.get('asyncTask').perform(this.get('onArchive'), rowData).catch(error => {
        if (!didCancel(error)) { throw error; }
      });
    },
    onDelete(rowData) {
      return this.get('asyncTask').perform(this.get('onDelete'), rowData).catch(error => {
        if (!didCancel(error)) { throw error; }
      });
    }
  }
});
