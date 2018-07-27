import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-debounce-input';

export default Component.extend({
  layout: layout,

  searchCompleted: false,

  actions: {
    searchAction(text) {
      this.set('searchCompleted', true);
      this.set('searchText', text);
    },
  },
});
