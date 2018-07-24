import { Promise } from 'rsvp';
import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-power-select-lazy';

const { setTimeout } = window;

const COLORS = [
  'Aqua',
  'Black',
  'Blue',
  'Brown',
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'B9',
  'B10',
  'B11',
  'B12',
  'B12',
  'B12',
  'B12',
  'B12',
  'B12',
  'B12',
  'B12',
  'B12',
  'Cyan',
  'Dark Blue',
  'Fuchsia',
  'Gray',
  'Green',
  'White',
  'Magenta',
  'Navy Blue',
  'Orange',
  'Purple',
  'Red',
  'Salmon',
  'Teal',
  'Violet',
  'Yellow'
];

function fuzzySearch(array, searchString) {
  return array.filter((string) => {
    return string.toLowerCase().includes(searchString.toLowerCase());
  });
}

export default Component.extend({
  layout,

  pageSize: 10,
  selected: undefined,

  multiSelectSelected: undefined,

  init() {
    this._super(...arguments);
  },

  pageCount(results) {
    const pageSize = this.get('pageSize');
    return Math.ceil(results.length / pageSize);
  },

  /* Create fake async search task */
  fetchColors(searchString, page) {
    const timeout = 1000;
    const pageSize = this.get('pageSize');


    return new Promise((resolve) => {
      setTimeout(() => {
        const fuzzyColors = fuzzySearch(COLORS, searchString);
        const pageColors = fuzzyColors.slice((page - 1) * pageSize, page * pageSize);

        resolve({ options: pageColors, pageCount: this.pageCount(fuzzyColors) });
      }, timeout);
    });
  },

  actions: {
    fetchColors(searchString, page) {
      return this.fetchColors(searchString, page);
    },
  }
});
