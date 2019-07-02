import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-checkbox';

export default Component.extend({
  layout: layout,
  classNames: ['freestyle-checkbox'],

  isChecked: true,
  isNotChecked: false,
  console: window.console,

  actions: {
    checkboxChange(/*newChecked, oldChecked*/) {
    },
    toggleFavorite(favorite){
      this.console.info(`Favorite Triggered: ${favorite.toString()}`);
    }
  },
});
