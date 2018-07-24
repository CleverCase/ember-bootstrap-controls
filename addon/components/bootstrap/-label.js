import Component from '@ember/component';
import layout from '../../templates/components/bootstrap/-label';
import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  layout,
  tagName: 'label',
  classNameBindings: ['srOnly:sr-only'],
  attributeBindings: ['for'],
  
  init() {
    this.propTypes = {
      for: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      srOnly: PropTypes.bool,
    };
    this._super(...arguments);
  },


  getDefaultProps() {
    return {
      srOnly: false,
    };
  },
});
