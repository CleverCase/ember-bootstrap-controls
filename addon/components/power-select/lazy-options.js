/* global $ */
import Ember from 'ember';
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
    const searchAction = Ember.get(select, 'actions.search');
    const searchText = Ember.get(select, 'searchText');

    if (searchAction && searchText) {
      return searchAction(searchText);
    }
  },

  attachCheckVisibilty() {
    const checkVisibility = () => {
      if ($(this.element).find('.ember-power-select-option--load-more').checkInView(true)) {
        this.loadMore();
      }
    };

    $(this.element).on('scroll', checkVisibility);
  },

  removeCheckVisibility() {
    $(this.element).off('scroll');
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


