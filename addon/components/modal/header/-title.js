import Ember from 'ember';
import layout from '../../../templates/components/modal/header/-title';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  classNames: ['modal-title'],
  tagName: 'h5',

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
