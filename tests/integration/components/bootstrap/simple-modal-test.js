import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

moduleForComponent('bootstrap/simple-modal', 'Integration | Component | bootstrap/simple-modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Example if your component had an `action` that it required:
  this.set('noop', () => {});
  this.set('title', 'Title of Modal')
  this.set('body', 'Simple content to display in a modal')
  // this.render(hbs`{{bootstrap/simple-modal action=noop}}`);
  this.render(hbs`{{bootstrap/simple-modal isOpen=true acceptAction=noop title=title body=body}}`);

  assert.dom('.modal-title').hasText(this.get('title'));
  assert.dom('.modal-body').hasText(this.get('body'));

  // Template block usage:
  this.render(hbs`
    {{#bootstrap/simple-modal isOpen=true acceptAction=noop title='Test'}}
      template block text
    {{/bootstrap/simple-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  return a11yAudit(this.$()).then(() => {
    assert.ok(true, 'no a11y errors found!');
  });
});
