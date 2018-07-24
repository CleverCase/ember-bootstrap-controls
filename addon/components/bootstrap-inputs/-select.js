import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/-select';

export default Component.extend({
  tagName: '',
  layout,
  lastIndex: computed('options', function() {
    return this.get('options.length') - 1;
  }),
});
