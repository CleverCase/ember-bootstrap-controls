import Component from '@ember/component';
import layout from '../../../templates/components/bootstrap/tables/-table';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { notEmpty, or, alias } from '@ember/object/computed';
import { isPresent, isEqual } from '@ember/utils';
import { task } from 'ember-concurrency';
import { get } from '@ember/object';
import { propDefinitions } from './table-with-pagination';

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),
  tagName: 'table',
  // classNames: propDefinitions.classNames.default,

  archiveEnabled: notEmpty('onArchive'),
  deleteEnabled: notEmpty('onDelete'),
  editEnabled: notEmpty('onEdit'),
  showEnabled: notEmpty('onShow'),
  actionsEnabled: or('deleteEnabled', 'editEnabled', 'showEnabled', 'archiveEnabled'),

  sortingRows: alias('onSortTask.isRunning'),
  sortingEnabled: notEmpty('onSort'),

  calculateSortingTask: task(function * () {
    const rowsData = yield this.get('rowsData');
    if(isPresent(rowsData)) {
      const sortingInformation = yield get(rowsData, 'meta.sort');
      if(isPresent(sortingInformation)) {
        const sortReverse = yield get(sortingInformation, 'reverse');
        this.setProperties({
          sortField: yield get(sortingInformation, 'criteria'),
          sortReverse: isEqual('true', sortReverse),
        });
      }
    }
  }).restartable(),

  onSortTask: task(function * (sortCriteria, sortReverse) {
    const onSort = yield this.get('onSort');
    const currentSortCriteria = yield this.get('sortField');
    if(isPresent(onSort)) {
      return yield onSort(sortCriteria, sortReverse, currentSortCriteria);
    }
  }).restartable(),

  didReceiveAttrs() {
    this.get('calculateSortingTask').perform();
  },

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  actions: {
    onSort(sortCriteria, sortReverse) {
      return this.get('onSortTask').perform(sortCriteria, sortReverse);
    }
  }
});
