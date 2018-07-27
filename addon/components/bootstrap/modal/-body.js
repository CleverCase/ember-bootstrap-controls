import Component from '@ember/component';
import layout from '../../../templates/components/bootstrap/modal/-body';
import {
  BuilderForPropTypes,
  BuilderForPropDefaults
} from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {};

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  classNames: ['modal-body'],

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
