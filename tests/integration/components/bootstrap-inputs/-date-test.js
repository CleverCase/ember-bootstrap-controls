import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Bootstrap Inputs | Date', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and datepicker', async function(assert) {
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    assert.equal(findAll('input[type="date"]').length, 1);
    assert.equal(findAll('label').length, 1);
  });

  skip('it uses value', async function(assert) {
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label='label' value=value}}`);
    assert.equal(find('input[type="date"]').value, this.get('value'));
  });

  test('it uses label', async function(assert) {
    this.set('label', 'Some label');
    this.set('value', new Date());
    await render(hbs`{{bootstrap-inputs/-date label=label value=value}}`);
    assert.equal(find('label').textContent.trim(), this.get('label'));
  });
});
