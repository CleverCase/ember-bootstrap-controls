import Ember from 'ember';
import layout from '../templates/components/bootstrap-input';
import asserIfUsingRenamedEvents from '../utils/assert-if-using-renamed-events';

export const INPUT_CLASS_NAME = 'bootstrap-input-component';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  classNames: [INPUT_CLASS_NAME],

  tabindex: 0,

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.get('type') === 'checkbox') {
      Ember.assert("A type of 'checkbox' is not supported. Use  bootstrap-checkbox instead");
    }

    asserIfUsingRenamedEvents(this);
  }
});
