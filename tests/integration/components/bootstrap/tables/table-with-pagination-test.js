import EmberObject from '@ember/object';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/tables/table-with-pagination', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders table with pagination', async function(assert) {
    assert.expect(2);
    const Col = EmberObject.extend({});
    const Mod = EmberObject.extend({});
    this.set('columns',[
      Col.create({
        headerLabel: '#',
        cellValueKey: 'number',
        columnKey: 'number',
        sortingCriteriaValue: 'number'}),
      Col.create({
        headerLabel: 'First',
        cellValueKey: 'first',
        columnKey: 'first',
        sortingCriteriaValue: 'first'}),
      Col.create({
        headerLabel: 'Last',
        cellValueKey: 'last',
        columnKey: 'last',
        sortingCriteriaValue: 'last'}),
      Col.create({
        headerLabel: 'Handle',
        cellValueKey: 'handle',
        columnKey: 'handle',
        sortingCriteriaValue: 'handle'})
    ]);
  
    this.set('models',[
      Mod.create({
        number: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      }),
      Mod.create({
        number: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@jet'
      }),
      Mod.create({
        number: 3,
        first: 'Larry',
        last: 'Bird',
        handle: '@twitter'
      }),
    ]);
    await render(hbs`{{bootstrap/tables/table-with-pagination
      tableClassNames=["table-dark"]
      columns=columns
      rowsData=models
      onEdit=noop
      onDelete=noop
      onArchive=noop
      onShow=noop
      paginationEnabled=true
    }}`);
    assert.ok(true, 'No errors');
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a table with bagination in block syntax', async function(assert){
    assert.expect(2);
    const Col = EmberObject.extend({});
    const Mod = EmberObject.extend({});
    this.set('columns',[
      Col.create({headerLabel: '#',cellValueKey: 'number',columnKey: 'number',sortingCriteriaValue: 'number',}),
      Col.create({
        headerLabel: 'First',
        cellValueKey: 'first',
        columnKey: 'first',
        sortingCriteriaValue: 'first',
      }),
      Col.create({
        headerLabel: 'Last',
        cellValueKey: 'last',
        columnKey: 'last',
        sortingCriteriaValue: 'last',
      }),
      Col.create({
        headerLabel: 'Handle',
        cellValueKey: 'handle',
        columnKey: 'handle',
        sortingCriteriaValue: 'handle',
      })
    ]);
  
    this.set('models',[
      Mod.create({
        number: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      }),
      Mod.create({
        number: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@jet'
      }),
      Mod.create({
        number: 3,
        first: 'Larry',
        last: 'Bird',
        handle: '@twitter'
      }),
    ]);
    
    await render(hbs`
      {{#bootstrap/tables/table-with-pagination
        columns=columns
        rowsData=models
        responsive=false
        noRowsMessage='No Recent Tasks'
        onDelete=noop
        onPage=noop
        onSort=noop
        as |paginatedTable|
      }}
        {{#paginatedTable.table classNames='table table-sm table-striped' as |table|}}
          {{table.header}}
          {{#table.body as |body|}}
            {{#body.row as |row|}}
              {{#row.columns as |columns|}}
                {{#if (eq columns.columnIndex 0)}}
                  {{#columns.cell as |cell|}}
                    {{cell.data}}
                  {{/columns.cell}}
                {{else if (eq columns.columnIndex 3)}}
                  {{#columns.cell as |cell|}}
                      {{cell.data}}
                  {{/columns.cell}}
                {{else}}
                  {{columns.cell}}
                {{/if}}
              {{/row.columns}}
              {{row.actions}}
            {{/body.row}}
          {{/table.body}}
        {{/paginatedTable.table}}
      {{/bootstrap/tables/table-with-pagination}}
    `);
    assert.ok(true, 'No errors');
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
