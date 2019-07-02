import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  fillIn,
  typeIn
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component |  Bootstrap Inputs | Telephone', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-tel label='label' value='555-555-5555'}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-tel label='label' value='555-555-5555'}}`);
    assert.dom('input[type="tel"]:enabled').exists({ count: 1 });
    assert.dom('label').exists({ count: 1 });
  });

  test('it uses value', async function(assert) {
    assert.expect(1);
    this.set('value', '555-555-5555');
    await render(hbs`{{bootstrap-inputs/-tel label='label' value=value}}`);
    assert.dom('input[type="tel"]').hasValue(this.get('value'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-tel label=label value='555-555-5555'}}`);
    assert.dom('label').hasText(this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-tel onChange=onChange label='label' value='555-555-5555'}}`);
    await fillIn('input', '123-456-7890');
    await typeIn('input', '098-765-4321');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-tel label='label' value='555-555-5555' disabled=true}}`);
    assert.dom('input[type="tel"]').isDisabled();
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-tel label='label' value='555-555-5555' formDisabled=true}}`);
    assert.dom('input[type="tel"]').isDisabled();
  });
});
