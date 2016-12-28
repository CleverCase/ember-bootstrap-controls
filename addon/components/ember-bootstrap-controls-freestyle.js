import Ember from 'ember';
import layout from '../templates/components/ember-bootstrap-controls-freestyle';

export default Ember.Component.extend({
  layout: layout,

  actions: {
    selectItem(selectedItem) {
      this.set("selectedSample", selectedItem)
    },

    alertSelectItem(selectedItem) {
      this.set("selectedSample", selectedItem)
    },
  }
});
