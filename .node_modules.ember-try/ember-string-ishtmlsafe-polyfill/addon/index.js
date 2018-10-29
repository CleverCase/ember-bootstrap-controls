import Ember from 'ember';

Ember.deprecate("ember-string-ishtmlsafe-polyfill is now a true polyfill. Use Ember.String.isHTMLSafe directly instead of importing from ember-string-ishtmlsafe-polyfill", false, {
  id: "ember-string-ishtmlsafe-polyfill.import",
  until: '2.0.0'
});

export default Ember.String.isHTMLSafe;
