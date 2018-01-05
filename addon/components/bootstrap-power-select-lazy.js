import Ember from 'ember';
import { POWER_SELECT_CLASS_NAME } from './bootstrap-power-select';
import layout from '../templates/components/bootstrap-power-select-lazy';
import LazySelectState from '../utils/lazy-select-state';

export default Ember.Component.extend({
  tagName: '', // We don't want a wrapping tag as this is a wrapper and the control-wrapper component will define the tag and bindings
  layout,
  classNames: [POWER_SELECT_CLASS_NAME],

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

      Ember.assert('Must pass a `searchByPage action to `bootstrap-power-select-lazy`', searchByPage);

      return lazyState.search(term, searchByPage, debounceMS);
    }
  }
});
