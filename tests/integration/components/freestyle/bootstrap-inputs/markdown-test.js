import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle/bootstrap-inputs/markdown', 'Integration | Component | freestyle/bootstrap inputs/markdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{freestyle/bootstrap-inputs/markdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#freestyle/bootstrap-inputs/markdown}}
      template block text
    {{/freestyle/bootstrap-inputs/markdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
