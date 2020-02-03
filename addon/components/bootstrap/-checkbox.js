import Checkbox from '@ember/component/checkbox';

export default Checkbox.extend({
  classNames: ['form-check-input'],

  change() {
    const onClick = this.get('onClick');
    this.set('checked', this.element.checked);

    if (onClick) {
      onClick(this.element.checked, !this.element.checked);
    }
  },
});
