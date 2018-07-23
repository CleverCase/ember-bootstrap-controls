import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap/-form-controls/save-button', 'Integration | Component | Bootstrap | Form Controls | Save Button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap/-form-controls/save-button}}`);

  assert.equal(this.$().text().trim(), 'Save');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap/-form-controls/save-button}}
      template block text
    {{/bootstrap/-form-controls/save-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
