import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  fillIn,
  typeIn
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Time', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-time label='label' value='12:12'}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-time label='label' value='12:12'}}`);
    assert.dom('input[type="time"]:enabled').exists({ count: 1 });
    assert.dom('label').exists({ count: 1 });
  });

  test('it uses value', async function(assert) {
    assert.expect(1);
    this.set('value', '12:12');
    await render(hbs`{{bootstrap-inputs/-time label='label' value=value}}`);
    assert.dom('input[type="time"]').hasValue(this.get('value'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-time label=label value='12:12'}}`);
    assert.dom('label').hasText(this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-time onChange=onChange label='label' value='12:12'}}`);
    await fillIn('input', '11:11');
    await typeIn('input', '10:10');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-time label='label' value='12:12' disabled=true}}`);
    assert.dom('input[type="time"]').isDisabled();
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-time label='label' value='12:12' formDisabled=true}}`);
    assert.dom('input[type="time"]').isDisabled();
  });
});
