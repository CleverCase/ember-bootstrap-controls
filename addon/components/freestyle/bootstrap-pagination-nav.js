import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-pagination-nav';

export default Ember.Component.extend({
  layout: layout,
  pageNumber: 1,
  pageSize: 5,
  totalPages: Ember.computed('pageSize', function() {
    return (100 / this.get('pageSize'));
  }),
});
