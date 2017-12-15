import Ember from 'ember';
import layout from '../templates/components/bootstrap-input';
import InputableMixin from '../mixins/components/inputable';
import asserIfUsingRenamedEvents from '../utils/assert-if-using-renamed-events';

export default Ember.Component.extend(InputableMixin, {
  layout: layout,
  tagName: '',

  classNames: ['bootstrap-input-component'],

  tabindex: 0,

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.get('type') === 'checkbox') {
      Ember.assert("A type of 'checkbox' is not supported. Use  bootstrap-checkbox instead");
    }

    asserIfUsingRenamedEvents(this);
  }
});
