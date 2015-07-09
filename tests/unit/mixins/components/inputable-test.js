import Ember from 'ember';
import ComponentsInputableMixin from '../../../mixins/components/inputable';
import { module, test } from 'qunit';

module('Unit | Mixin | components/inputable');

// Replace this with your real tests.
test('it works', function(assert) {
  var ComponentsInputableObject = Ember.Object.extend(ComponentsInputableMixin);
  var subject = ComponentsInputableObject.create();
  assert.ok(subject);
});
