import Ember from 'ember';
import { MULTI_SELECT_CLASS_NAME } from './bootstrap-multi-select';
import generateUUID from 'ember-bootstrap-controls/utils/generate-uuid';
import layout from '../templates/components/bootstrap-multi-select-lazy';
import LazySelectState from '../utils/lazy-select-state';

export default Ember.Component.extend({
  tagName: '', // We don't want a wrapping tag as this is a wrapper and the control-wrapper component will define the tag and bindings
  layout,
  classNames: [MULTI_SELECT_CLASS_NAME],

  /* Required Attributes */
  searchByPage: undefined,

  /* Optional Attributes */
  debounceMS: undefined,

  _lazyState: undefined,

  init() {
    // call super
    this._super(...arguments);

    // Set initial state
    this.set('_lazyState', LazySelectState.create());
  },

  actions: {
    search(term) {
      const lazyState = this.get('_lazyState');
      const searchByPage = this.get('searchByPage');
      const debounceMS = this.get('debounceMS');

      Ember.assert('Must pass a `searchByPage action to `bootstrap-multi-select-lazy`', searchByPage);

      return lazyState.search(term, searchByPage, debounceMS);
    }
  }
});
