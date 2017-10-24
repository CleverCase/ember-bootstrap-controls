import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-multi-select-lazy', 'Integration | Component | bootstrap multi select lazy', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-multi-select-lazy}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-multi-select-lazy}}
      template block text
    {{/bootstrap-multi-select-lazy}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
