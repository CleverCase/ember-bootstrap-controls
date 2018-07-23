import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal/footer/-close-button', 'Integration | Component | modal/footer/ close button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modal/footer/-close-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modal/footer/-close-button}}
      template block text
    {{/modal/footer/-close-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
