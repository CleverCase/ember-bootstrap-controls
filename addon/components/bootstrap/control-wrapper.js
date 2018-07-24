import Ember from 'ember';
import InputableMixin from '../../mixins/components/-inputable';
import layout from '../../templates/components/bootstrap/control-wrapper';

export default Ember.Component.extend(InputableMixin, {
  layout,
  classNameBindings: ['floatingLabel:form-label-group'],
});
