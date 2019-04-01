import Component from '@ember/component';
import layout from '../../../templates/components/bootstrap/tables/table-with-pagination';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { notEmpty, alias } from '@ember/object/computed';
import { get } from '@ember/object';
import { task } from 'ember-concurrency';
import { isPresent } from '@ember/utils';

export const propDefinitions = {
  tableClassNames:{
    default: ['table', 'table-striped', 'table-sm'],
    description: 'Table class names to be adeed to the list of class names',
    type: PropTypes.arrayOf(PropTypes.string),
  },
  responsive: {
    default: true,
    description: 'Indicates whether the table is responsive or not',
    type: PropTypes.bool
  },
  onSort: {
    description: 'Function to be excecuted on sort',
    type: PropTypes.func
  },
  onEdit: {
    description: 'Function to be executed on edit',
    type: PropTypes.func
  },
  onShow: {
    description: 'Function to be executed on show',
    type: PropTypes.func
  },
  onDelete: {
    description: 'Function to be executed on delete',
    type: PropTypes.func
  },
  reloadingRowsData: {
    description: 'Inidicates whether the table row data will be reloaded or not',
    type: PropTypes.bool
  },
  sortField: {
    description: 'Inidicates the sorting criteria',
    type: PropTypes.string
  },
  sortReverse: {
    description: 'Inidicates whether the table can be sorted in reverse or not',
    type: PropTypes.bool
  },
  rowsData: {
    description: 'The table data that will be rendered in the rows',
    type: PropTypes.arrayOf(PropTypes.EmberObject),
  },
  noRowsMessage: {
    default: 'No data',
    description: 'The string to be displayed if the data has no rows.',
    type: PropTypes.string,
  },
  columns: {
    description: 'The table columns that will be rednered',
    type: PropTypes.arrayOf(PropTypes.shape({
      headerLabel: PropTypes.string,
      cellValueKey: PropTypes.string,
      cellValueTask: PropTypes.string,
      sorting: PropTypes.shape({
      }),
    }))
  }
};

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),
  tagName: '',
  pageSize: 25,
  pageNumber: 1,
  totalPages: 1,

  movingPages: alias('onPageTask.isRunning'),

  onPageProvided: notEmpty('onPage'),
  paginationEnabled: alias('onPageProvided'),

  calculatePaginationTask: task(function * () {
    const rowsData = yield this.get('rowsData');
    if(isPresent(rowsData)) {
      const paginationInformation = yield get(rowsData, 'meta.page');
      if(isPresent(paginationInformation)) {
        const pageNumberString = yield get(paginationInformation, 'offset');
        const pageNumber = (isPresent(pageNumberString) ? Number.parseInt(pageNumberString) : null);
        const countEnd = yield get(paginationInformation, 'iteration_count_end');
        const countTotal = yield get(paginationInformation, 'total_records');
        this.setProperties({
          pageSize: yield get(paginationInformation, 'size'),
          totalPages: yield get(paginationInformation, 'total_pages'),
          pageNumber: pageNumber,
          pageRecordsMeta: {
            countStart: yield get(paginationInformation, 'iteration_count_start'),
            countEnd: Math.min(countEnd, countTotal),
            countTotal: countTotal,
          },
        });
      }
    }
  }).restartable(),

  onPageTask: task(function * (pageNumber, pageSize) {
    const onPage = yield this.get('onPage');
    this.setProperties({
      pageNumber: pageNumber,
      pageSize: pageSize,
    });
    if(isPresent(onPage)) {
      return yield onPage(pageNumber, pageSize);
    }
  }).restartable(),

  didReceiveAttrs() {
    this.get('calculatePaginationTask').perform();
    const tableClassNames = this.get('tableClassNames');
    this.set('tableClassNames', propDefinitions.tableClassNames.default.concat(tableClassNames));
  },

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  actions: {
    onPage(pageNumber, pageSize) {
      return this.get('onPageTask').perform(pageNumber, pageSize);
    },
  }
});
