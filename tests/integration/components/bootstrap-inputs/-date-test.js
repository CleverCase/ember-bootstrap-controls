import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, fillIn, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Bootstrap Inputs | Date', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and datepicker', async function(assert) {
    assert.expect(2);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    assert.equal(findAll('input[type="date"]:enabled').length, 1);
    assert.equal(findAll('label').length, 1);
  });

  skip('it uses value', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    assert.equal(find('input[type="date"]').value, this.get('value'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label=label value=value}}`);
    assert.equal(find('label').textContent.trim(), this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('value', new Date());
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-date onChange=onChange label='Label' value=value}}`);
    await fillIn('input', 'Hello');
    await typeIn('input', 'There');
  });

  test('it supports disabled', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value disabled=true}}`);
    assert.equal(findAll('input[type="date"]:disabled').length, 1);
  });

  test('it supports formDisabled', async function(assert) {
    assert.expect(1);
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value formDisabled=true}}`);
    assert.equal(findAll('input[type="date"]:disabled').length, 1);
  });
});
