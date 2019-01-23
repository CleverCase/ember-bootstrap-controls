import Mixin from '@ember/object/mixin';
import { isPresent } from '@ember/utils';

export default Mixin.create({
  init() {
    this.queryParams = Object.assign(
      {
        pageNumber: { refreshModel: true },
        pageSize: { refreshModel: true },
      },
      this.get('queryParams')
    );

    return this._super(...arguments);
  },

  paginationParams(params) {
    return {
      offset: params.pageNumber ? params.pageNumber : 1,
      size: params.pageSize ? params.pageSize : 25,
    };
  },

  afterModel(results) {
    this.setProperties({
      pageNumber: results.get('meta.page.offset'),
      pageSize: results.get('meta.page.size'),
      totalPages: results.get('meta.page.total_pages'),
      totalRecords: results.get('meta.page.total_records'),
      currentIterationCount: results.get('meta.page.current_iteration_count')
    });

    return this._super(...arguments);
  },

  setupController(controller) {
    controller.setProperties({
      pageNumber: parseInt(this.get('pageNumber')),
      pageSize: parseInt(this.get('pageSize')),
      totalPages: parseInt(this.get('totalPages')),
      totalRecords: parseInt(this.get('totalRecords')),
      currentIterationCount: parseInt(this.get('currentIterationCount')),
    });
    return this._super(...arguments);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('pageNumber', 1);
    }
    return this._super(...arguments);
  },

  actions: {
    onPage(pageNumber, pageSize) {
      const controller = this.get('controller');
      if(isPresent(controller)) {
        controller.setProperties({
          pageNumber: pageNumber,
          pageSize: pageSize,
        });
      }
    },
  }
});
