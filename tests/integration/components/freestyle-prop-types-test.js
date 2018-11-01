import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | Freestyle Prop Types', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('fakeOptions', ['fakeOption']);

    await render(hbs`{{freestyle-prop-types options=fakeOptions}}`);

    assert.ok(true, this.$().text().trim().includes(this.get('fakeOption')));

    // Template block usage:
    await render(hbs`
      {{#freestyle-prop-types}}
        template block text
      {{/freestyle-prop-types}}
    `);

    assert.ok(true, this.$().text().trim().includes('template block text'));
  });
});
