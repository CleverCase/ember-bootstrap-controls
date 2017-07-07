import Ember from 'ember';

let registerHelper = Ember.Helper.helper ? Ember.Helper.helper : Ember.HTMLBars.makeBoundHelper;

export default function registerHelper(helper) {
  return registerHelper(helper);
}
