import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal/header/-close-button', 'Integration | Component | modal/header/ close button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modal/header/-close-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modal/header/-close-button}}
      template block text
    {{/modal/header/-close-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
