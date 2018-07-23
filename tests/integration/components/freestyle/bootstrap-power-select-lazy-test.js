import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freestyle/bootstrap-power-select-lazy', 'Integration | Component | Freestyle/Bootstrap Power Select Lazy', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('fakeOnChange', () => {});

  this.render(hbs`{{freestyle/bootstrap-power-select-lazy onChange=(action fakeOnChange)}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.set('text', 'template block text');
  this.render(hbs`
    {{#freestyle/bootstrap-power-select-lazy label=text onChange=(action fakeOnChange)}}
    {{/freestyle/bootstrap-power-select-lazy}}
  `);
  assert.ok(true, this.$().text().trim().includes(this.get('text')));
});
