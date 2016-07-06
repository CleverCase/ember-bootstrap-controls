import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: {
    pageNumber: { refreshModel: true },
    pageSize: { refreshModel: true },
  },

  actions: {
    loading() {
      const router = this.router;
      router.intermediateTransitionTo('loading');
    },
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
    });

    return this._super(...arguments);
  },

  setupController(controller) {
    this._super(...arguments);

    controller.setProperties({
      pageNumber: parseInt(this.get('pageNumber')),
      pageSize: parseInt(this.get('pageSize')),
      totalPages: parseInt(this.get('totalPages'))
    });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('pageNumber', 1);
    }

    return this._super(...arguments);
  },
});
