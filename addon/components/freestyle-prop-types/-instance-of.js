import Component from '@ember/component';
import layout from '../../templates/components/freestyle-prop-types/-instance-of';

export default Component.extend({
  layout,
  instanceType: '',
  didReceiveAttrs() {
    if( this.get('propDefinition.type.typeDef') ) {
      this.set('instanceType', this.get('propDefinition.type.typeDef').toString());
    }
  },
});
