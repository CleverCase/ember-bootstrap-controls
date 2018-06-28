import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-inputs/-radio', 'Integration | Component | bootstrap inputs/ radio', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-inputs/-radio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-radio}}
      template block text
    {{/bootstrap-inputs/-radio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
