import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Example if your component had an `action` that it required:
    // this.set('noop', () => {});
    // this.render(hbs`{{bootstrap/simple-form action=noop}}`);
    await render(hbs`{{bootstrap/simple-form}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#bootstrap/simple-form}}
        template block text
      {{/bootstrap/simple-form}}
    `);

    assert.dom('*').hasText('template block text');

    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
