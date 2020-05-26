import Mixin from '@ember/object/mixin';
import { isPresent, isEqual } from '@ember/utils';

export default Mixin.create({
  sortDirectionDefault: "false",

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
    let literalBoolean = params.sortReverse === true || params.sortReverse === false;
    let stringBoolean = isEqual(params.sortReverse, 'true') || isEqual(params.sortReverse, 'false');
    if (literalBoolean || stringBoolean) {
      params.sortReverse = params.sortReverse.toString(); // NOTE: Convert T/F to string in order to send across server
    } else {
      params.sortReverse = defaultSortReverse;
    }
    return {
      criteria: params.sortCriteria ? params.sortCriteria : defaultSortCriteria,
      reverse: params.sortReverse ? params.sortReverse : defaultSortReverse,
    };
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('sortCriteria', null);
      controller.set('sortReverse', this.sortDirectionDefault);
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
