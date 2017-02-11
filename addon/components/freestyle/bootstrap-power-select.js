import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-power-select';
import { task, timeout } from 'ember-concurrency'

export default Ember.Component.extend({
  layout: layout,
  selectedItem: null,

  names: ['Joe', 'Erin', 'Chad', 'Sam', 'Nathan', 'Isaac', 'Kevin', 'Ty', 'Tyler', 'Herb', 'Amy', 'Casey', 'Bret'],
  moreNames: [
    { label: 'Adam', value: 1 },
    { label: 'Betty', value: 2 },
    { label: 'Chris', value: 3 },
    { label: 'Dana', value: 4 },
    { label: 'Ellen', value: 5 },
    { label: 'Frank', value: 6 },
    { label: 'Goerge', value: 7 },
    { label: 'Heidi', value: 8 },
    { label: 'Joe', value: 9 },
    { label: 'Erin', value: 10 },
    { label: 'Chad', value: 11 },
    { label: 'Sam', value: 12 },
    { label: 'Nathan', value: 13 },
    { label: 'Isaac', value: 14 },
    { label: 'Kevin', value: 15 },
    { label: 'Ty', value: 16 },
    { label: 'Tyler', value: 17 },
    { label: 'Herb', value: 18 },
    { label: 'Amy', value: 19 },
    { label: 'Casey', value: 2 },
    { label: 'Bret', value: 21 },
    { label: 'Zeek', value: 22 },
    { label: 'Paul', value: 23 },
    { label: 'Jane', value: 24 },
    { label: 'Kim', value: 25 },
    { label: 'Jill', value: 26 },
    { label: 'Tom', value: 27 },
    { label: 'Will', value: 28 },
    { label: 'Fred', value: 29 },
    { label: 'Tim', value: 30 },
    { label: 'Walt', value: 31 }
  ],

  searchTask: task(function * (searchText) {
    if (Ember.isBlank(searchText)) {
      return [];
    }

    yield timeout(500);

    return this.findNames(searchText);
  }).restartable(),

  findNames(containsText) {
    const moreNames = this.get('moreNames');
    let foundNames = [];

    moreNames.forEach(nameObj => {
      if (nameObj.label.includes(containsText)) {
        foundNames.push(nameObj);
      }
    });

    return foundNames;
  },

  myMatcher(name, term) {
    return (name.label.toUpperCase().includes(term.toUpperCase()) || name.value === parseInt(term) ? 1 : -1);
  },

  actions: {
    selectItem(selected) {
      this.set('selectedItem', selected);
    },
  },
});
