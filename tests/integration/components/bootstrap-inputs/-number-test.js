import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap-inputs/-number', 'Integration | Component | Bootstrap Inputs | Number', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Example if your component had an `action` that it required:
  // this.set('noop', () => {});
  // this.render(hbs`{{bootstrap-inputs/-number action=noop}}`);
  this.set('value', "1");
  this.render(hbs`{{bootstrap-inputs/-number label="Label" value=value}}`);

  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-number label="Label" value=value}}
      template block text
    {{/bootstrap-inputs/-number}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
