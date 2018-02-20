import Ember from 'ember';

export default Ember.Checkbox.extend({
  classNames: ['form-control'],

  click() {
  	const onClick = this.get('onClick');

  	if (onClick) {
  		onClick(...arguments);
  	}
  }
});
