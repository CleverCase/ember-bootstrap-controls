import TextField from '@ember/component/text-field';

export default TextField.extend({
  classNames: ['form-control'],
  attributeBindings: ['aria-describedby', 'maxlength'],

  click() {
    const onClick = this.get('onClick');

    if (onClick) {
      onClick(...arguments);
    }
  }
});
