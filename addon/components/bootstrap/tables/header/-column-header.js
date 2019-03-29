import Component from '@ember/component';
import layout from '../../../../templates/components/bootstrap/tables/header/-column-header';
import { computed, get } from '@ember/object';
import { task } from 'ember-concurrency';
import { isPresent, isEqual } from '@ember/utils';
import { notEmpty, not } from '@ember/object/computed';

export default Component.extend({
  layout,
  tagName: 'th',
  column: null,
  label: null,
  sortingCriteria: null,

  columnSortingEnabled: notEmpty('sortingCriteria'),
  activeSortColumn: computed('sortingCriteria', 'sortField', function() {
    const columnCriteia = this.get('sortingCriteria');
    const tableCriteia = this.get('sortField');
    return isEqual(tableCriteia, columnCriteia);
  }),
  sortReverseReverse: not('sortReverse'),
  nextSortDirection: computed('sortReverseReverse', 'activeSortColumn', function() {
    if(this.get('activeSortColumn')) {
      return this.get('sortReverseReverse');
    } else {
      return false;
    }
  }),

  calculateLabelTask: task(function * (column) {
    const label = yield get(column, 'headerLabel');
    const field = yield get(column, 'cellValueKey');
    if(isPresent(label)) {
      return label;
    } else if (isPresent(field)) {
      return field;
    } else {
      return null;
    }
  }).restartable(),

  calculateSortingTask: task(function * (column) {
    const sortingCriteria = yield get(column, 'sortingCriteriaValue');
    if(isPresent(sortingCriteria)) {
      return sortingCriteria;
    }
  }).restartable(),

  calculateColumnTask: task(function * (column) {
    if(isPresent(column)) {
      return yield this.setProperties({
        label: yield this.get('calculateLabelTask').perform(column),
        sortingCriteria: yield this.get('calculateSortingTask').perform(column)
      });
    }
  }).restartable(),

  didReceiveAttrs() {
    this.get('calculateColumnTask').perform(this.get('column'));
  },
});
