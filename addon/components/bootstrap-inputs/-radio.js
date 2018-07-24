import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/-radio';

export default Component.extend({
  classNames: ['form-check'],
  classNameBindings: ['inline:form-check-inline'],
  inline: false,
  layout,
  inputId: computed(function() {
    return `bootstrap-control-input-${guidFor(this)}`;
  }),
});
