import Ember from 'ember';
import layout from '../templates/components/bootstrap-pagination-nav';

export default Ember.Component.extend({
  tagName: 'nav',
  className: ['bootstrap-pagination-nav-component'],
  layout: layout,

  // Attributes
  pageNumber: null,
  totalPages: null,
  innerWindowSize: 2,
  outerWindowSize: 1,

  // Actions
  moveToPage: null,

  _innerPageNumbers: Ember.computed('innerWindowSize', 'pageNumber', function() {
    const innerWindowSize = this.get('innerWindowSize');
    const arraySize = innerWindowSize * 2 + 1; // double the length plus the middle "pageNumber"
    const pageNumber = this.get('pageNumber');

    return Array.apply(null, Array(arraySize)).map((n, index) => {
      return pageNumber - innerWindowSize + index;
    });
  }),

  _outerLeftPageNumbers: Ember.computed('outerWindowSize', function() {
    const outerWindowSize = this.get('outerWindowSize');

    return Array.apply(null, Array(outerWindowSize)).map((n, index) => {
      return index + 1;
    });
  }),

  _outerRightPageNumbers: Ember.computed('outerWindowSize', 'totalPages', function() {
    const outerWindowSize = this.get('outerWindowSize');
    const totalPages = this.get('totalPages');

    return Array.apply(null, Array(outerWindowSize)).map((n, index) => {
      return totalPages - outerWindowSize + index + 1;
    });
  }),

  visibleOuterLeftPageNumbers: Ember.computed('_outerLeftPageNumbers', 'totalPages', function() {
    const totalPages = this.get('totalPages');
    const _outerLeftPageNumbers = this.get('_outerLeftPageNumbers');

    return _outerLeftPageNumbers.filter((pageNumber) => {
      return pageNumber <= totalPages;
    });
  }),

  visibleOuterRightPageNumbers: Ember.computed('_outerRightPageNumbers', 'visibleOuterLeftPageNumbers', function() {
    const _outerRightPageNumbers = this.get('_outerRightPageNumbers');
    const visibleOuterLeftPageNumbers = this.get('visibleOuterLeftPageNumbers');

    return _outerRightPageNumbers.filter((pageNumber) => {
      return pageNumber >= 1 && visibleOuterLeftPageNumbers.indexOf(pageNumber) === -1;
    });
  }),

  visibleInnerPageNumbers: Ember.computed(
    '_innerPageNumbers',
    'visibleOuterLeftPageNumbers',
    'visibleOuterRightPageNumbers',
    'pageNumber',
    'totalPages',
    function() {
      const _innerPageNumbers = this.get('_innerPageNumbers');
      const visibleOuterLeftPageNumbers = this.get('visibleOuterLeftPageNumbers');
      const visibleOuterRightPageNumbers = this.get('visibleOuterRightPageNumbers');
      const totalPages = this.get('totalPages');

      return _innerPageNumbers.filter((pageNumber) => {
        return visibleOuterLeftPageNumbers.indexOf(pageNumber) === -1 &&
          visibleOuterRightPageNumbers.indexOf(pageNumber) === -1 &&
          pageNumber >= 1 && pageNumber <= totalPages;
      });
    }
  ),

  hasLeftGap: Ember.computed(
    'pageNumber',
    'innerWindowSize',
    'outerWindowSize',
    function() {
      let innerWindowSize = this.get('innerWindowSize');
      let outerWindowSize = this.get('outerWindowSize');
      let pageNumber = this.get('pageNumber');
      let firstInnerPageNumber = pageNumber - innerWindowSize;

      return firstInnerPageNumber > (outerWindowSize + 1);
    }
  ),

  hasRightGap: Ember.computed(
    'pageNumber',
    'totalPages',
    'innerWindowSize',
    'outerWindowSize',
    function() {
      let innerWindowSize = this.get('innerWindowSize');
      let outerWindowSize = this.get('outerWindowSize');
      let totalPages = this.get('totalPages');
      let pageNumber = this.get('pageNumber');
      let lastInnerPageNumber = pageNumber + innerWindowSize;
      var firstOuterRightPageNumber = totalPages - outerWindowSize;

      return lastInnerPageNumber < firstOuterRightPageNumber;
    }
  ),

  actions: {
    moveToPage: function(pageNumber) {
      if (pageNumber >= 1) {
        this.get('moveToPage')(pageNumber);
      }
    }
  }
});
