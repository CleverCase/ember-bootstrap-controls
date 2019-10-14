import Component from '@ember/component';
import layout from '../templates/components/bootstrap-mask-input';
import { INPUT_CLASS_NAME } from './bootstrap-input';
import { set } from '@ember/object';

export const INPUT_MASK_CLASS_NAME = 'bootstrap-input-mask-component';

export default Component.extend({
  tagName: '',
  classNames: [INPUT_CLASS_NAME, INPUT_MASK_CLASS_NAME],
  layout: layout,

  keepCharPositions: true,

  actions: {
    update(unmasked, masked) {
      set(this, 'value', unmasked);
      set(this, 'masked', masked);

      if (this.onUpdate) {
        this.onUpdate(unmasked, masked);
      }
    },
  }
});
