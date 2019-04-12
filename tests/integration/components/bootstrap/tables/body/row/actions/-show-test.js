import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/tables/body/row/actions/-show', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    this.set('noop', () => {});
    await render(hbs`{{bootstrap/tables/body/row/actions/-show action=noop}}`);
    assert.ok(true, 'No errors');
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders in block syntax', async function(assert){
    assert.expect(2);
    this.set('noop', () => {});
    await render(hbs`
      {{#bootstrap/tables/body/row/actions/-show action=noop}}
        template block text
      {{/bootstrap/tables/body/row/actions/-show}}
    `);
    assert.ok(true, 'No errors');
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
