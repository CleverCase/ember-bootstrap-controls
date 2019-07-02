import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/buttons/edit-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a edit button', async function(assert) {
    this.set('noop', () => {});
    assert.expect(2);
    await render(hbs`{{bootstrap/buttons/edit-button action=noop}}`);
    assert.dom('button').exists({ count: 1 });
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders in block syntax', async function(assert){
    this.set('noop', () => {});
    assert.expect(2);
    await this.render(hbs`
      {{#bootstrap/buttons/edit-button
        action=noop
      }}
        template block text
      {{/bootstrap/buttons/edit-button}}
    `);
    assert.dom('button').exists({ count: 1 });
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
