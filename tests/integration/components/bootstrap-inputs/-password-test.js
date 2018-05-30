import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-inputs/-password', 'Integration | Component | bootstrap inputs/ password', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-inputs/-password}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-password}}
      template block text
    {{/bootstrap-inputs/-password}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
