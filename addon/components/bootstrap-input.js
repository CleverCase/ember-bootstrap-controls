import Ember from 'ember';
import layout from '../templates/components/bootstrap-input';
import InputableMixin from '../mixins/components/inputable';
import computedActionKey from '../utils/computed-action-key';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  placeholder: null,
  value: null,
  readonly: null,
  type: null,
  srOnly: null,
  tabindex: 0,
  required: true,

  keyPress: computedActionKey('key-press'),
  keyUp: computedActionKey('key-up'),
  keyDown: computedActionKey('key-down'),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  isChecked: Ember.computed('type', function() {
    return (this.get('type') === 'checkbox');
  }),

  valueDecorator: Ember.computed('value', 'type', {
    get() {
      if(this.get('type') === 'checkbox') {
        return null;
      } else {
        return this.get('value');
      }
    },

    set(key, value) {
      this.set('value', value);
    }
  }),

  checkedDecorator: Ember.computed('value', 'type', {
    get() {
      if(this.get('type') === 'checkbox') {
        return this.get('value');
      } else {
        return null;
      }
    },

    set(key, value) {
      this.set('value', value);
    }
  }),

  actions: {
    keyPress: function() {
      this.sendAction('key-press', ...arguments);
    },

    keyUp: function() {
      this.sendAction('key-up', ...arguments);
    },

    keyDown: function() {
      this.sendAction('key-down', ...arguments);
    },
  },
});
