import Component from '@ember/component';
import layout from '../templates/components/bootstrap-mask-input';
import { INPUT_CLASS_NAME } from './bootstrap-input';

export const INPUT_MASK_CLASS_NAME = 'bootstrap-input-mask-component';

export default Component.extend({
  tagName: '',
  classNames: [INPUT_CLASS_NAME, INPUT_MASK_CLASS_NAME],
  layout: layout,

  placeholderChar: '_',
  keepCharPositions: true,
});
