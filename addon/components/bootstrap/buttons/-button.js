import { or } from '@ember/object/computed';
import Component from '@ember/component';
import { task, didCancel } from 'ember-concurrency';
import layout from '../../../templates/components/bootstrap/buttons/-button';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  action: {
    description: 'Button action to be executed',
    type: PropTypes.func.isRequired
  },
  disabled: {
    default: false,
    description: 'Indicates whether the button is disbaled or not',
    type: PropTypes.bool
  },
  buttonText: {
    default: 'Button',
    description: 'Button text to be rendered',
    type: PropTypes.string
  }
};

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['btn'],
  attributeBindings: ['disabledButton:disabled', 'type', 'aria-label'],
  propTypes: BuilderForPropTypes(propDefinitions),
  adisabledButton: or('asyncTask.isRunning', 'disabled'),

  asyncTask: task(function * (asyncTask) {
      return yield asyncTask();
  }).drop(),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  click(e) {
    e.preventDefault();
    return this.get('asyncTask').perform(this.get('action')).catch(error => {
      if (!didCancel(error)) {
        throw error;
      }
    });
  },
});
