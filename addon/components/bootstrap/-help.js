import Component from '@ember/component';
import layout from '../../templates/components/bootstrap/-help';
import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  layout,
  tagName: 'small',
  classNames: ['text-muted'],
  attributeBindings: ['id'],
  propTypes: { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    id: PropTypes.string.isRequired,
    help: PropTypes.string.isRequired,
  },
});
