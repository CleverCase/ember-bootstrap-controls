import Checkbox from '@ember/component/checkbox';

export default Checkbox.extend({
  classNames: ['form-check-input'],

  click() {
    const onClick = this.get('onClick');

    if (onClick) {
      onClick(!this.get('checked'), this.get('checked'), ...arguments);
    }
  }
});
