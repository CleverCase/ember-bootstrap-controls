import Component from '@ember/component';
import layout from '../../templates/components/bootstrap/-help';
import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  layout,
  tagName: 'small',
  classNames: ['text-muted'],
  attributeBindings: ['id'],

  init() {
    this.propTypes = {
      id: PropTypes.string.isRequired,
      help: PropTypes.string.isRequired,
    };
    this._super(...arguments);
  },


});
