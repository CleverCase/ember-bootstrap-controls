import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-inputs/-select', 'Integration | Component | Bootstrap Inputs | Select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('fakeOnChangeAction', () => {});

  this.render(hbs`{{bootstrap-inputs/-select onChange=(action fakeOnChangeAction)}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('selectOptions', ["template block text"]);

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-inputs/-select onChange=(action fakeOnChangeAction) options=selectOptions}}
      template block text
    {{/bootstrap-inputs/-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
