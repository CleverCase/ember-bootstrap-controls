import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, fillIn, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | Bootstrap Inputs | Search', function(hooks) {
  setupRenderingTest(hooks);

  test('it has no a11y errors', async function(assert) {
    assert.expect(1);
    await render(hbs`{{bootstrap-inputs/-search label='label' value='Search Term'}}`);
    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });

  test('it renders a label and input', async function(assert) {
    assert.expect(2);
    await render(hbs`{{bootstrap-inputs/-search label='label' value='Search Term'}}`);
    assert.equal(findAll('input[type="search"]').length, 1);
    assert.equal(findAll('label').length, 1);
  });

  test('it uses value', async function(assert) {
    assert.expect(2);
    this.set('value', 'Search Term');
    this.set('newValue', 'Some Other Search Term');
    await render(hbs`{{bootstrap-inputs/-search label='label' value=value}}`);
    assert.equal(find('input[type="search"]').value, this.get('value'));
    await fillIn('input', this.get('newValue'));
    assert.equal(this.get('value'), this.get('newValue'));
  });

  test('it uses label', async function(assert) {
    assert.expect(1);
    this.set('label', 'Some label');
    await render(hbs`{{bootstrap-inputs/-search label=label value='Search Term'}}`);
    assert.equal(find('label').textContent.trim(), this.get('label'));
  });

  test('it supports onChange', async function(assert) {
    assert.expect(2);
    this.set('onChange', () => {
      assert.ok(true);
    });
    await render(hbs`{{bootstrap-inputs/-search onChange=onChange label='label' value='Search Term'}}`);
    await fillIn('input', 'Hello');
    await typeIn('input', 'There');
  });

  test('it supports onInput', async function(assert) {
    assert.expect(1);
    this.set('inputValue', 'How To Program');
    this.set('onInput', (value) => {
      assert.equal(value, this.get('inputValue'));
    });
    await render(hbs`{{bootstrap-inputs/-search onInput=onInput onInputDebounce=0 label='label' value='Search Term'}}`);
    await fillIn('input', this.get('inputValue'));
  });
});
