import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap-input/-email', 'Integration | Component | Email Input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Example if your component had an `action` that it required:
  // this.set('noop', () => {});
  // this.render(hbs`{{bootstrap-input/-email action=noop}}`);
  this.set('label', 'Some Label');
  this.set('value', 'email');
  this.render(hbs`{{bootstrap-inputs/-email label=label value=value}}`);

  assert.equal(this.$().text().trim(), this.get('label'));

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-email label=label value=value}}
      {{label}}
    {{/bootstrap-inputs/-email}}
  `);

  assert.equal(this.$().text().trim(), this.get('label'));

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
