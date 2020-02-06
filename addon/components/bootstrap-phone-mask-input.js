import Component from '@ember/component';
import layout from '../templates/components/bootstrap-phone-mask-input';
import { set } from '@ember/object';
import { INPUT_CLASS_NAME } from './bootstrap-input';
import { INPUT_MASK_CLASS_NAME } from './bootstrap-mask-input';

export default Component.extend({
  tagName: '',
  classNames: [INPUT_CLASS_NAME, INPUT_MASK_CLASS_NAME],
  layout: layout,

  keepCharPositions: true,
  phoneMask: '(999) 999-9999',

  actions: {
    update(unmasked, masked) {
      set(this, 'value', masked);
      set(this, 'unmasked', unmasked);

      if (this.onUpdate) {
        this.onUpdate(unmasked, masked);
      }
    },
  }
});
