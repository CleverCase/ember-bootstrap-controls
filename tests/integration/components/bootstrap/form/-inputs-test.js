import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap/form/-inputs', 'Integration | Component | bootstrap/form/ inputs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap/form/-inputs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap/form/-inputs}}
      template block text
    {{/bootstrap/form/-inputs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
