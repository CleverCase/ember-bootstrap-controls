import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap/-form-controls', 'Integration | Component | Bootstrap | Form Controls', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('noop', () => {});
  this.render(hbs`{{bootstrap/-form-controls cancel=noop save=noop edit=noop}}`);

  assert.equal(this.$().text().trim(), 'Edit');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap/-form-controls cancel=noop save=noop edit=noop}}
      template block text
    {{/bootstrap/-form-controls}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
