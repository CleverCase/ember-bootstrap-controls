import Component from '@ember/component';
import layout from '../../../../../templates/components/bootstrap/tables/body/row/-cell';
import { get, computed } from '@ember/object';
import { task, didCancel } from 'ember-concurrency';
import { isPresent } from '@ember/utils';
import { or } from '@ember/object/computed';

export default Component.extend({
  layout,
  tagName: 'td',
  cellData: null,

  _hasCellValueKey: computed('column.cellValueKey', function() {
    return isPresent(this.get('column.cellValueKey'));
  }),

  _hasCellValueTask: computed('column.cellValueTask', function() {
    return isPresent(this.get('column.cellValueTask'));
  }),

  _hasCellValue: or('_hasCellValueKey', '_hasCellValueTask'),

  defaultCellDataTask: task(function * (model, column) {
    const modelKey = yield get(column, 'cellValueKey');
    if(isPresent(modelKey)) {
      return yield get(model, modelKey);
    } else {
      return null;
    }
  }),

  calculateCellDataTask: task(function * (column) {
    if(isPresent(column)) {
      const rowModel = yield this.get('rowData');
      const cellTask = yield get(column, 'cellValueTask');
      if(isPresent(cellTask)) {
        return yield cellTask.perform(rowModel);
      } else {
        return yield this.get('defaultCellDataTask').perform(rowModel, column);
      }
    }
  }).restartable(),

  didReceiveAttrs() {
    this.get('calculateCellDataTask').perform(this.get('column')).then((value) => {
      this.set('cellData', value);
    }).catch((e) => { if (!didCancel(e)) { throw e; } });
  },
});
