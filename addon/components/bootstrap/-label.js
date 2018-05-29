import Ember from 'ember';
import layout from '../../templates/components/bootstrap/-label';
import { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  tagName: 'label',
  classNameBindings: ['srOnly:sr-only'],
  attributeBindings: ['for'],
  propTypes: {
    for: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    srOnly: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      srOnly: false,
    };
  },
});
