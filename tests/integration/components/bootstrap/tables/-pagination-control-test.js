import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/tables/-pagination-control', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    this.set('pagpageRecordsMetaeRec', {countStart: 1,countEnd: 1, countTotal: 1});
    this.set('noop', () => {});
    await render(hbs`{{bootstrap/tables/-pagination-control
      pageNumber=1
      pageSize=10
      totalPages=totalPages
      pageRecordsMeta=pageRecordsMeta
      onPage=noop
    }}`);
    assert.ok(true, 'No errors');
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders in block syntax', async function(assert){
    assert.expect(2);
    this.set('noop', () => {});
    this.set('pagpageRecordsMetaeRec', {countStart: 1,countEnd: 1, countTotal: 1});
    await render(hbs`
      {{#bootstrap/tables/-pagination-control
        pageNumber=1
        pageSize=25
        totalPages=totalPages
        pageRecordsMeta=pageRecordsMeta
        onPage=noop
      }}
        template block text
      {{/bootstrap/tables/-pagination-control}}
    `);
    assert.ok(true, 'No errors');
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
