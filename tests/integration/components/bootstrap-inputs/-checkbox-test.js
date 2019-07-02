import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Checkbox Input', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-checkbox label='label' value=true}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-checkbox label='label' value=true}}`);
    assert.dom('input[type="checkbox"]:enabled').exists({ count: 1 });
    assert.dom('label').exists({ count: 1 });
  });

  test('it uses value', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-checkbox label='label' value=true}}`);
    assert.dom('input[type="checkbox"]').isChecked();

    await render(hbs`{{bootstrap-inputs/-checkbox label='label' value=false}}`);
    assert.dom('input[type="checkbox"]:not(:checked)').exists();
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-checkbox label=label value=true}}`);
    assert.dom('label').hasText(this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(1);
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-checkbox onChange=onChange label='Label' value=true}}`);
    await click('input');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-checkbox label='label' value=true disabled=true}}`);
    assert.dom('input[type="checkbox"]').isDisabled();
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-checkbox label='label' value=true formDisabled=true}}`);
    assert.dom('input[type="checkbox"]').isDisabled();
  });
});
