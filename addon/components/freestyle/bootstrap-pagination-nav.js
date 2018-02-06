import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-pagination-nav';

export default Ember.Component.extend({
  layout: layout,
  numberOfElements: 100,
  pageNumber: 1,
  pageSize: 5,

  totalPages: Ember.computed('pageSize', 'numberOfElements', function() {
    if(this.get('pageSize') && this.get('pageSize') > 0) {
      return Math.ceil(this.get('numberOfElements') / this.get('pageSize'));
    } else {
      return this.get('numberOfElements');
    }
  }),
  elements: Ember.computed('pageSize', 'numberOfElements', 'pageNumber', function() {
    let counter = [];
    let start = (this.get('pageNumber') - 1) * this.get('pageSize') + 1;
    let end = start + parseInt(this.get('pageSize'));
    for (let i = start; i < end; i++) {
      counter.push(i);
    }
    return counter;
  }),
});
