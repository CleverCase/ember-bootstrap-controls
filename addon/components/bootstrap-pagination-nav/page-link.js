import Ember from 'ember';
import layout from '../../templates/components/bootstrap-pagination-nav/page-link';

export default Ember.Component.extend({
  layout,
  tagName: 'a',
  classNames: ['page-link'],
  attributeBindings: ['tabindex', 'href'],

  href: '#!',

  //TODO: Add prop definitions
  disabled: undefined,
  active: undefined,

  click() {
    const disabled = this.get('disabled');
    const active = this.get('active');

    if (!disabled && !active) {
      return this.get('action')(...arguments);
    }
  }
});
