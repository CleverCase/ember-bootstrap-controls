import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component |  Bootstrap Inputs | Telephone', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    await render(hbs`{{bootstrap-inputs/-tel label='label' value='555-555-5555'}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    await render(hbs`{{bootstrap-inputs/-tel label='label' value='555-555-5555'}}`);
    assert.equal(findAll('input[type="tel"]').length, 1);
    assert.equal(findAll('label').length, 1);
  });

  test('it uses value', async function(assert) {
    this.set('value', '555-555-5555');
    await render(hbs`{{bootstrap-inputs/-tel label='label' value=value}}`);
    assert.equal(find('input[type="tel"]').value, this.get('value'));
  });

  test('it uses label', async function(assert) {
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-tel label=label value='555-555-5555'}}`);
    assert.equal(find('label').textContent.trim(), this.get('label'));
  });
});
