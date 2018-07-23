import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle/bootstrap-button', 'Integration | Component | freestyle/bootstrap button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('fakeOptions', ['fakeOption']);
  this.render(hbs`{{freestyle/bootstrap-button}}`);
  assert.ok(true, this.$().text().trim().includes(this.get('fakeOption')));

  // Template block usage:
  this.render(hbs`
    {{#freestyle/bootstrap-button}}
      template block text
    {{/freestyle/bootstrap-button}}
  `);
  assert.ok(true, this.$().text().trim().includes('template block text'));
});
