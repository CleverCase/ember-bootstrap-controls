import Component from '@ember/component';
import layout from '../../../../templates/components/freestyle/bootstrap/tables/table-with-pagination';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../../bootstrap/tables/table-with-pagination';
import faker from 'faker';
import ArrayProxy from '@ember/array/proxy';


var createFakeModels = function() {
  return Array.from(
    { length:10 },
    ()=> (
      {
        number: faker.random.number(),
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        handle: `@${faker.internet.userName()}`,
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
      }
    )
  );
};

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    noRowsMessage: 'No Recent Tasks',
    columns: [
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
      },
      {
        headerLabel: 'Email',
        cellValueKey: 'email',
        columnKey: 'email',
        sortingCriteriaValue: 'email',
      }
    ],
    models: ArrayProxy.create({
      content: createFakeModels(),
      meta: {
          page: {
            current_iteration_count: -24,
            iteration_count_end: 25,
            iteration_count_start: 1,
            offset: "1",
            record_count: 25,
            size: "25",
            total_pages: 2,
            total_records: 49,
        }
      }
    }),
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
