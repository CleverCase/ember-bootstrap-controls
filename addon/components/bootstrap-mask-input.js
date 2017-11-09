import Ember from 'ember';
import layout from '../templates/components/bootstrap-mask-input';

export const INPUT_MASK_CLASS_NAME = 'bootstrap-input-mask-component';

export default Ember.Component.extend({
  tagName: '',
  classNames: [INPUT_MASK_CLASS_NAME],
  layout: layout,

  placeholderChar: '_',
  keepCharPositions: true,
});
