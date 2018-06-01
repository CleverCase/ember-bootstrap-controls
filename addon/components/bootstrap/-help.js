import Ember from 'ember';
import layout from '../../templates/components/bootstrap/-help';
import { PropTypes } from 'ember-prop-types';

export default Ember.Component.extend({
  layout,
  tagName: 'small',
  classNames: ['text-muted'],
  attributeBindings: ['id'],
  propTypes: {
    id: PropTypes.string.isRequired,
    help: PropTypes.string.isRequired,
  },
});
