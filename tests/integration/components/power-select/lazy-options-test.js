import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('power-select/lazy-options', 'Integration | Component | Power Select | Lazy Options', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('fakeSelectSearchAction', {
    actions: {
     search: () => {},
     scrollTo: () => {}
    }
  });

  this.render(hbs`{{power-select/lazy-options select=fakeSelectSearchAction}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#power-select/lazy-options select=fakeSelectSearchAction}}
      template block text
    {{/power-select/lazy-options}}
  `);
  assert.ok(true, this.$().text().trim().includes('template block text'));
});
