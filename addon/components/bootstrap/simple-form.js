import Component from '@ember/component';
import layout from '../../templates/components/bootstrap/simple-form';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
};

export default Component.extend({
  layout,
  tagName: 'form',
  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
