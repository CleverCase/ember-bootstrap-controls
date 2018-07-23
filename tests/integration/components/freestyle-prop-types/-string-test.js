import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle-prop-types/-string', 'Integration | Component | Freestyle Prop Types | String', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('fakeOptions', ['fakeOption']);
  this.render(hbs`{{freestyle-prop-types/-string}}`);
  assert.ok(true, this.$().text().trim().includes(this.get('fakeOption')));

  // Template block usage:
  this.render(hbs`
    {{#freestyle-prop-types/-string}}
      template block text
    {{/freestyle-prop-types/-string}}
  `);
  assert.ok(true, this.$().text().trim().includes('template block text'));
});
