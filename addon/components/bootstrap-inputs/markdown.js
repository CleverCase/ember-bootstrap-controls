import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/markdown';
import { task, timeout } from 'ember-concurrency';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  /*
    autocomplete: {
      default: 'email',
      description: 'Indicates whether the value can be automatically completed by the browser.',
      type: PropTypes.oneOf(['off', 'email']),
    },
  */
};

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  debounce: 800,

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  valueChangedTask: task(function * (value) {
    yield timeout(this.get('debounce'));

    if (this.get('onChange')) {
      this.get('onChange')(value);
    }
  }).restartable(),

  actions: {
    valueChanged(value) {
      return this.get('valueChangedTask').perform(value);
    }
  }
});
