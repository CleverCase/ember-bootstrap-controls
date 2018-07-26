import { inject as service } from '@ember/service';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

export default FreestyleController.extend({
  emberFreestyle: service(),

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
