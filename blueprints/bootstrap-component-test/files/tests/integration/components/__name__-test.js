import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('<%= dasherizedModuleName %>', 'Integration | Component | bootstrap button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Example if your component had an `action` that it required:
  // this.set('noop', () => {});
  // this.render(hbs`{{<%= dasherizedModuleName %> action=noop}}`);
  this.render(hbs`{{<%= dasherizedModuleName %>}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#<%= dasherizedModuleName %>}}
      template block text
    {{/<%= dasherizedModuleName %>}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
