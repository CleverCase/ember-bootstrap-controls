import Ember from 'ember';
import layout from '../../templates/components/bootstrap-inputs/-radio';

export default Ember.Component.extend({
  classNames: ['form-check'],
  classNameBindings: ['inline:form-check-inline'],
  inline: false,
  layout,
  inputId: Ember.computed(function() {
    return `bootstrap-control-input-${Ember.guidFor(this)}`;
  }),
});
