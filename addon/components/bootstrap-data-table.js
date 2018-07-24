import Component from '@ember/component';
import layout from '../templates/components/bootstrap-data-table';

export default Component.extend({
  layout: layout,
  tagName: '',

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
