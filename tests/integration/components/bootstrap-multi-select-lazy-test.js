import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-multi-select-lazy', 'Integration | Component | bootstrap multi select lazy', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('fakeOnChange', () => {});

  this.render(hbs`{{bootstrap-multi-select-lazy onChange=(action fakeOnChange)}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:

  this.set('text', 'template block text');
  this.render(hbs`
    {{#bootstrap-multi-select-lazy label=text onChange=(action fakeOnChange)}}
    {{/bootstrap-multi-select-lazy}}
  `);

  assert.equal(this.$().text().trim(), this.get('text'));
});
