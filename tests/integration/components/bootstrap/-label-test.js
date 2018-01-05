import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap/-label', 'Integration | Component | bootstrap/ label', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap/-label}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap/-label}}
      template block text
    {{/bootstrap/-label}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
