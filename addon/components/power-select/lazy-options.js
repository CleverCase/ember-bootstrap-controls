/* global $ */
import { get } from '@ember/object';
import layout from '../../templates/components/power-select/lazy-options';
import PSOptionsComponent from 'ember-power-select/components/power-select/options';

export default PSOptionsComponent.extend({
  layout,

  canLoadMore: false,

  init() {
    this._super(...arguments);
  },

  loadMore() {
    const select = this.get('select');
    if (select) {
      const searchAction = get(select, 'actions.search');
      const searchText = get(select, 'searchText');

      if (searchAction && searchText) {
        return searchAction(searchText);
      }
    }
  },

  attachCheckVisibilty() {
    const checkVisibility = () => {
      if ($(this.element).find('.ember-power-select-option--load-more').checkInView(true)) { // eslint-disable-line ember/no-global-jquery
        this.loadMore();
      }
    };

    $(this.element).on('scroll', checkVisibility); // eslint-disable-line ember/no-global-jquery
  },

  removeCheckVisibility() {
    $(this.element).off('scroll'); // eslint-disable-line ember/no-global-jquery
  },

  didInsertElement() {
    this._super(...arguments);

    this.attachCheckVisibilty();
  },

  willDestroyElement() {
    this._super(...arguments);

    this.removeCheckVisibility();
  },

  actions: {
    loadMore() {
      this.loadMore();
    },
  }
});
