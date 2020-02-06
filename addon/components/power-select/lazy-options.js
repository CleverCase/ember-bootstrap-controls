import { get } from '@ember/object';
import layout from '../../templates/components/power-select/lazy-options';
import PSOptionsComponent from 'ember-power-select/components/power-select/options';
import jQuery from 'jquery'

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
      if (jQuery(this.element).find('.ember-power-select-option--load-more').checkInView(true)) {
        this.loadMore();
      }
    };

    jQuery(this.element).on('scroll', checkVisibility);
  },

  removeCheckVisibility() {
    jQuery(this.element).off('scroll');
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
