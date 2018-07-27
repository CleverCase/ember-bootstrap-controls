import Component from '@ember/component';
import layout from '../../templates/components/bootstrap/-label';
import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  layout,
  tagName: 'label',
  classNameBindings: ['srOnly:sr-only'],
  attributeBindings: ['for'],
  propTypes: { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
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
