import Mixin from '@ember/object/mixin';
import { isPresent } from '@ember/utils';

export default Mixin.create({
  init() {
    this.queryParams = Object.assign(
      {
        sortCriteria: { refreshModel: true },
        sortReverse: { refreshModel: true },
      },
      this.get('queryParams')
    );

    return this._super(...arguments);
  },

  sortingParams(params, defaultSortCriteria, defaultSortReverse = false) {
    if (params.sortReverse === true || params.sortReverse === false) {
      // NOTE: Convert T/F to string in order to send across server
      params.sortReverse = params.sortReverse.toString();
    }
    return {
      criteria: params.sortCriteria ? params.sortCriteria : defaultSortCriteria,
      reverse: params.sortReverse ? params.sortReverse : defaultSortReverse,
    };
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('sortCriteria', null);
      controller.set('sortReverse', false);
    }

    return this._super(...arguments);
  },

  actions: {
    onSort(sortCriteria, sortReverse) {
      const controller = this.get('controller');
      if(isPresent(controller)) {
        controller.setProperties({
          sortCriteria: sortCriteria,
          sortReverse: sortReverse,
          pageNumber: 1
        });
      }
    },
  }
});
