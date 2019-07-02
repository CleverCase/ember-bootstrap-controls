import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Integration | Component | bootstrap/simple-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Example if your component had an `action` that it required:
    this.set('noop', () => {});
    this.set('title', 'Title of Modal')
    this.set('body', 'Simple content to display in a modal')
    // this.render(hbs`{{bootstrap/simple-modal action=noop}}`);
    await render(hbs`{{bootstrap/simple-modal isOpen=true acceptAction=noop title=title body=body}}`);

    assert.dom('.modal-title').hasText(this.get('title'));
    assert.dom('.modal-body').hasText(this.get('body'));

    // Template block usage:
    await render(hbs`
      {{#bootstrap/simple-modal isOpen=true acceptAction=noop title='Test'}}
        template block text
      {{/bootstrap/simple-modal}}
    `);

    assert.dom('*').hasText('template block text');

    return a11yAudit(this.$()).then(() => {
      assert.ok(true, 'no a11y errors found!');
    });
  });
});
