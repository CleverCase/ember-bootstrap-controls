import Ember from 'ember';

export default Ember.TextField.extend({
  classNames: ['form-control'],
  attributeBindings: ['aria-describedby'],

  click() {
    const onClick = this.get('onClick');

    if (onClick) {
      onClick(...arguments);
    }
  }
});
