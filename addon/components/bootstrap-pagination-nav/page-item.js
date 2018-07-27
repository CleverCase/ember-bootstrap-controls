import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-pagination-nav/page-item';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['page-item'],
  attributeBindings: ['aria-label'],
  classNameBindings: ['disabled', 'active'],

  //TODO: Add prop definitions
  disabled: undefined,
  active: undefined,
});
