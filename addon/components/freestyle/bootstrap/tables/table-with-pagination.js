import Component from '@ember/component';
import layout from '../../../../templates/components/freestyle/bootstrap/tables/table-with-pagination';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../../bootstrap/tables/table-with-pagination';

export default Component.extend({
  init(){
    this._super(...arguments);
    this.set('columns',[
      {
        headerLabel: '#',
        cellValueKey: 'number',
        columnKey: 'number',
        sortingCriteriaValue: 'number',
      },
      {
        headerLabel: 'First',
        cellValueKey: 'first',
        columnKey: 'first',
        sortingCriteriaValue: 'first',
      },
      {
        headerLabel: 'Last',
        cellValueKey: 'last',
        columnKey: 'last',
        sortingCriteriaValue: 'last',
      },
      {
        headerLabel: 'Handle',
        cellValueKey: 'handle',
        columnKey: 'handle',
        sortingCriteriaValue: 'handle',
      }
    ]);

    this.set('models',[
      {
        number: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      },
      {
        number: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@jet'
      },
      {
        number: 3,
        first: 'Larry',
        last: 'Bird',
        handle: '@twitter'
      },
    ]);
  },
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
  }),

  basicValue: '',
  actions: {
    simpleAction() {

    },
    clickAction(text){
      window.alert(`You clikced on item ${text}`);
    },
    sortAction(sortCriteria){
      window.alert(`The table will be sorted by ${sortCriteria}`);
    },
    onEdit(){
      window.alert(`Edit table row`);
    },
    onDelete(){
      window.alert(`Delete table row`);
    },
  },
});
