import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap-inputs/-search', 'Integration | Component | Bootstrap Inputs | Search', {
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
  this.render(hbs`{{bootstrap-inputs/-search label=label value=value}}`);

  assert.ok(true, this.$().text().trim().includes(this.get('label')));

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-search label=label value=value as |component|}}
      {{component.label}}
      {{component.input}}
    {{/bootstrap-inputs/-search}}
  `);

  assert.ok(true, this.$().text().trim().includes(this.get('help')));

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
