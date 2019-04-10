import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../../templates/components/bootstrap/tables/-pagination-control';
import { task } from 'ember-concurrency';
import { isPresent } from '@ember/utils';
import { A } from '@ember/array';

export default Component.extend({
  layout,
  classNames: ['row','no-gutters'],
  showPaginationNav: computed('totalPages', 'pageRecordsMeta', function() {
    const onePage = this.get('totalPages') === 1;
    const moreThanFiveRecords = this.get('pageRecordsMeta.countTotal') > 5;
    const moreThanOnePage = this.get('totalPages') > 1;
    return onePage && moreThanFiveRecords ||
      moreThanOnePage && isPresent(this.get('pageRecordsMeta'));
  }),
  onPageTask: task(function * (pageNumber, pageSize) {
    const onPage = yield this.get('onPage');
    this.setProperties({
      pageNumber: pageNumber,
      pageSize: pageSize,
    });
    if(isPresent(onPage)) {
      return yield onPage(pageNumber, pageSize);
    }
  }).restartable(),

  calculatePageSizesTask: task(function * () {
    const pageSize = yield this.get('pageSize');
    const defaultPageSizes = yield this.get('defaultPageSizes');
    const validPageSizes = A(A(defaultPageSizes.concat(pageSize)).compact()).uniq();
    return yield this.set('validPageSizes', validPageSizes);
  }).restartable(),

  init() {
    this._super(...arguments);
    this.defaultPageSizes = [5, 10, 25, 50, 100];
  },

  didReceiveAttrs() {
    this.get('calculatePageSizesTask').perform();
  },

  actions: {
    moveToPage(pageNumber){
      return this.get('onPageTask').perform(pageNumber, this.get('pageSize'));
    },
    onPerPage(pageSize) {
      if(isPresent(pageSize)) {
        return this.get('onPageTask').perform(1, pageSize);
      }
    },
  }
});
