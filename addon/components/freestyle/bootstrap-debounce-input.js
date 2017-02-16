import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-debounce-input';

export default Ember.Component.extend({
  layout: layout,

  searchCompleted: false,

  actions: {
    searchAction(text) {
      this.set('searchCompleted', true);
      this.set('searchText', text);
    },
  },
});
