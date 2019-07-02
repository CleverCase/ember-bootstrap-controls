import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  fillIn,
  typeIn
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Bootstrap Inputs | Text', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-text label='label' value='Password'}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-text label='label' value='Password'}}`);
    assert.dom('input[type="text"]:enabled').exists({ count: 1 });
    assert.dom('label').exists({ count: 1 });
  });

  test('it uses value', async function(assert) {
    assert.expect(1);
    this.set('value', 'Password');
    await render(hbs`{{bootstrap-inputs/-text label='label' value=value}}`);
    assert.dom('input[type="text"]').hasValue(this.get('value'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-text label=label value='Password'}}`);
    assert.dom('label').hasText(this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-text onChange=onChange label='label' value='Password'}}`);
    await fillIn('input', 'Hello');
    await typeIn('input', 'There');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-text label='label' value='Password' disabled=true}}`);
    assert.dom('input[type="text"]').isDisabled();
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-text label='label' value='Password' formDisabled=true}}`);
    assert.dom('input[type="text"]').isDisabled();
  });
});
