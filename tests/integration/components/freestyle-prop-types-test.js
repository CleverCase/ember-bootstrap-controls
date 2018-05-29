import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle-prop-types', 'Integration | Component | freestyle prop types', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{freestyle-prop-types}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#freestyle-prop-types}}
      template block text
    {{/freestyle-prop-types}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
