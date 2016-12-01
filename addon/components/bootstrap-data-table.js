import Ember from 'ember';
import layout from '../templates/components/bootstrap-data-table';

export default Ember.Component.extend({
  layout: layout,
  dataArray: null,
  title: null,
  striped: null,
  responsive: null,
  bordered: null,
  canHover: null,
  condensed: null,
  numberedRows: null,
  hasLink: null,
  idOnRoute: null,
  url: null,

});
