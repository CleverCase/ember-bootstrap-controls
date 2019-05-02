import Component from '@ember/component';
import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-checkbox';

export default Component.extend({
  layout: layout,
  classNames: ['freestyle-checkbox'],

  isChecked: true,
  isNotChecked: false,

  actions: {
    checkboxChange(/*newChecked, oldChecked*/) {
    },
    toggleFavorite(favorite){
      console.info(`Favorite Triggered: ${favorite.toString()}`);
    }
  },
});
