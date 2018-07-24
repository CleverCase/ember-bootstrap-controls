import Mixin from '@ember/object/mixin';

export default Mixin.create({
  queryParams: {
    sortCiteria: { refreshModel: true },
    sortReverse: { refreshModel: true },
  },

  sortingParams(params) {
    if (params.sortReverse === true || params.sortReverse === false) {
      // NOTE: Convert T/F to string in order to send across server
      params.sortReverse = params.sortReverse.toString();
    }
    return {
      criteria: params.sortCriteria ? params.sortCriteria : null,
      reverse: params.sortReverse ? params.sortReverse : null,
    };
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('sortCriteria', null);
      controller.set('sortReverse', false);
    }

    return this._super(...arguments);
  },
});