import Ember from 'ember';

export default Ember.Checkbox.extend({
  classNames: ['form-check-input'],

  click() {
    const onClick = this.get('onClick');

    if (onClick) {
      onClick(!this.get('checked'), this.get('checked'), ...arguments);
    }
  }
});
