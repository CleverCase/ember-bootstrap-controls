import Ember from 'ember';
import layout from '../../templates/components/bootstrap-inputs/-select';

export default Ember.Component.extend({
  tagName: '',
  layout,
  lastIndex: Ember.computed('options', function() {
    return this.get('options.length') - 1;
  }),
});
