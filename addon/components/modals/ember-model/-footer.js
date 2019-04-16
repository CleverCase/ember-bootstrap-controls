import Component from '@ember/component';
import layout from '../../../templates/components/modals/ember-model/-footer';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  isNewModel: false,

  acceptButtonText: computed('isNewModel', function() {
    return (this.get('isNewModel') ? 'Save' : 'Update');
  }),
});
