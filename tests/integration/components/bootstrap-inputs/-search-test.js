import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap-inputs/-search', 'Integration | Component | bootstrap Inputs | Search', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Example if your component had an `action` that it required:
  // this.set('noop', () => {});
  // this.render(hbs`{{bootstrap-inputs/-search action=noop}}`);
  this.set('label', 'Seach for Things and Stuff');
  this.set('value', 'Bird');
  this.set('help', 'Search for anyhting. It is okay');
  this.render(hbs`{{bootstrap-inputs/-search label=label value=value help=help}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-search label=label value=value as |component|}}
      {{component.label}}
      {{component.help}}
      {{component.input}}
      {{component.value}}
      {{component.control.value}}
      {{component.control.input}}
    {{/bootstrap-inputs/-search}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
