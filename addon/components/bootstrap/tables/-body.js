import Component from '@ember/component';
import layout from '../../../templates/components/bootstrap/tables/-body';
import { computed } from '@ember/object';
import { and, not, or } from '@ember/object/computed';
import { isArray } from '@ember/array';

export default Component.extend({
  layout,
  tagName: 'tbody',
  computedColumnCount: computed('actionsEnabled', function() {
    if(this.get('actionsEnabled')) {
      return 1;
    } else {
      return 0;
    }
  }),
  totalColumnCount: computed('definedColumnCount', 'computedColumnCount', function() {
    return parseInt(this.get('definedColumnCount')) + parseInt(this.get('computedColumnCount'));
  }),

  arrayExists: computed('rowsData', function(){
    return isArray(this.get('rowsData'));
  }),
  
  loadedRowsData: or('rowsData.isLoaded', 'rowsData.isFulfilled', 'arrayExists'),
  reloadedRowsData: not('reloadingRowsData'),
  rowsDataLoaded: and('loadedRowsData', 'reloadedRowsData'),
});
