import { assert } from '@ember/debug';
import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import { task, didCancel, timeout } from 'ember-concurrency';

export default EmberObject.extend({
  lastSearchTerm: undefined,
  resolvedOptions: A([]),
  page: undefined,
  pageCount: undefined,
  isLoading: false,

  canLoadMore: computed('page', 'pageCount', function() {
    return this.get('page') < this.get('pageCount');
  }),

  initialFetch: task(function * (searchString, searchAction, debounceMS) {
    // Avoid throwing canceled `fetch` sub-task
    try {
      this.set('lastSearchTerm', searchString);
      this.set('page', 1);

      yield timeout(debounceMS);

      const { options, pageCount } = yield this.get('fetch').perform(searchString, 1, searchAction);

      this.set('pageCount', pageCount);

      const resolvedOptions = A([]);

      if (Array.isArray(options)) {
        resolvedOptions.addObjects(options);
      } else {
        // options is not an array, try to convert to one
        resolvedOptions.addObjects(options.toArray());
      }

      this.set('resolvedOptions', resolvedOptions);

      return resolvedOptions;
    } catch(e) {
      if (!didCancel(e)) { throw e; }
    }
  }).restartable(),

  loadMoreFetch: task(function * (searchString, searchAction) {
    // Avoid throwing canceled `fetch` sub-task
    try {
      const currentPage = this.get('page');
      const nextPage = currentPage + 1;

      const { options, pageCount } = yield this.get('fetch').perform(searchString, nextPage, searchAction);

      this.set('pageCount', pageCount);
      this.set('page', nextPage);

      const resolvedOptions = this.get('resolvedOptions');

      if (Array.isArray(options)) {
        resolvedOptions.addObjects(options);
      } else {
        // options is not an array, try to convert to one
        resolvedOptions.addObjects(options.toArray());
      }

      return resolvedOptions;
    } catch(e) {
      if (!didCancel(e)) { throw e; }
    }
  }),

  fetch: task(function * (searchString, page, searchAction) {
    try {
      this.set('isLoading', true);

      return yield searchAction(searchString, page);
    } finally {
      this.set('isLoading', false);
    }
  }).restartable(),

  search(term, searchAction, debounceMS = 250) {
    const lastSearchTerm = this.get('lastSearchTerm');

    assert('Must pass a search action to `search` on LazySelectState', searchAction);

    if (term === lastSearchTerm) {
      return this.get('loadMoreFetch').perform(term, searchAction);
    } else {
      return this.get('initialFetch').perform(term, searchAction, debounceMS);
    }
  },
});
