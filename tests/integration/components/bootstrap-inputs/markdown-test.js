import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-inputs/markdown', 'Integration | Component | bootstrap-inputs/markdown', {
  integration: true
});

skip('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{bootstrap-inputs/markdown}}`);
  assert.ok(true, 'No errors');
});
