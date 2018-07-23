import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal/footer/-accept-button', 'Integration | Component | modal/footer/ accept button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modal/footer/-accept-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modal/footer/-accept-button}}
      template block text
    {{/modal/footer/-accept-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
