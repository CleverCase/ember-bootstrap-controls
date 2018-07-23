import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap/radio-group', 'Integration | Component | Bootstrap | Radio Group', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap/radio-group label="label"}}`);

  assert.equal(this.$().text().trim(), 'label');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap/radio-group label="label"}}
    {{/bootstrap/radio-group}}
  `);

  assert.equal(this.$().text().trim(), 'label');
});
