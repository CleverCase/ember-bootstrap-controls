import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { PropTypes } from 'ember-prop-types';

module('Integration | Component | Freestyle Prop Types', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const description = 'Indicates whether the table is responsive or not'

    this.set('propDefs', {
      responsive: {
        default: true,
        description,
        type: PropTypes.bool
      },
    });

    await render(hbs`{{freestyle-prop-types propDefinitions=propDefs}}`);

    assert.ok(true, this.$().text().trim().includes(description));
  });
});
