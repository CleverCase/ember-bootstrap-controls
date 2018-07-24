import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),

  init() {
    this.colorPalette = {
      'primary': {
        'name': 'cyan',
        'base': '#00bcd4'
      },
      'accent': {
        'name': 'amber',
        'base': '#ffc107'
      },
      'secondary': {
        'name': 'greyish',
        'base': '#b6b6b6'
      },
      'foreground': {
        'name': 'blackish',
        'base': '#212121'
      },
      'background': {
        'name': 'white',
        'base': '#ffffff'
      }
    };
    this._super(...arguments);
  },
});
