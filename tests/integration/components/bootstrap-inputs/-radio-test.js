import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap-inputs/-radio', 'Integration | Component | bootstrap inputs | radio', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('label', 'Some Label');
  this.set('value', true);
  this.render(hbs`{{bootstrap-inputs/-radio label=label value=value}}`);

  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-radio label=label value=value}}
      template block text
    {{/bootstrap-inputs/-radio}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
