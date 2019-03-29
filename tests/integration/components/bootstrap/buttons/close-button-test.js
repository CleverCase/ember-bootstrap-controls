import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/buttons/close-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a close button', async function(assert) {
    this.set('noop', () => {});
    assert.expect(2);
    await render(hbs`{{bootstrap/buttons/close-button action=noop}}`);
    assert.equal(findAll('button').length, 1);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders in block syntax', async function(assert){
    this.set('noop', () => {});
    assert.expect(2);
    await this.render(hbs`
      {{#bootstrap/buttons/close-button 
        action=noop
      }}
        template block text
      {{/bootstrap/buttons/close-button}}
    `);
    assert.equal(findAll('button').length, 1);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
