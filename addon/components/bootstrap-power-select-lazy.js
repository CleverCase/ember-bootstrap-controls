import Ember from 'ember';
import { POWER_SELECT_CLASS_NAME } from './bootstrap-power-select';
import generateUUID from 'ember-bootstrap-controls/utils/generate-uuid';
import { task, didCancel } from 'ember-concurrency';
import layout from '../templates/components/bootstrap-power-select-lazy';

export default Ember.Component.extend({
  tagName: '', // We don't want a wrapping tag as this is a wrapper and the control-wrapper component will define the tag and bindings
  layout,
  classNames: [POWER_SELECT_CLASS_NAME],

  /* Required Attributes */
  searchByPage: undefined,

  /* Optional Attributes */
  pageSize: 25,

  /* Internal State Attributes */
  _lastSearchTerm: undefined,
  _page: undefined,
  _pageCount: undefined,
  _resolvedOptions: Ember.A([]),

  inputId: Ember.computed(function() {
    return `bootstrap-component-${generateUUID()}`;
  }),

  _canLoadMore: Ember.computed('_page', '_pageCount', function() {
    return this.get('_page') < this.get('_pageCount');
  }),

  _isLoading: false,

  initialFetch: task(function * (searchString) {
    // Avoid throwing canceled `fetch` sub-task
    try {
      this.set('_lastSearchTerm', searchString);
      this.set('_page', 1);

      const { options, pageCount } = yield this.get('fetch').perform(searchString, 1);

      this.set('_pageCount', pageCount);

      const resolvedOptions = Ember.A([]);

      if (Array.isArray(options)) {
        resolvedOptions.addObjects(options);
      } else {
        // options is not an array, try to convert to one
        resolvedOptions.addObjects(options.toArray());
      }

      this.set('_resolvedOptions', resolvedOptions);

      return resolvedOptions;
    } catch(e) {
      if (!didCancel(e)) { throw e; }
    }
  }),

  loadMoreFetch: task(function * (searchString) {
    // Avoid throwing canceled `fetch` sub-task
    try {
      const currentPage = this.get('_page');
      const nextPage = currentPage + 1;

      const { options, pageCount } = yield this.get('fetch').perform(searchString, nextPage);

      this.set('_pageCount', pageCount);
      this.set('_page', nextPage);

      const resolvedOptions = this.get('_resolvedOptions');

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

  fetch: task(function * (searchString, page) {
    try {
      const searchByPage = this.get('searchByPage');

      this.set('_isLoading', true);

      return yield searchByPage(searchString, page);
    } finally {
      this.set('_isLoading', false);
    }
  }).restartable(),

  actions: {
    search(term) {
      const lastSearchTerm = this.get('_lastSearchTerm');
      if (term === lastSearchTerm) {
        return this.get('loadMoreFetch').perform(term);
      } else {
        return this.get('initialFetch').perform(term);
      }
    }
  }
});
