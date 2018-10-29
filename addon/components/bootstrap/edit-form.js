import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/bootstrap/edit-form';
import { PropTypes } from 'ember-prop-types';
import { task, didCancel } from 'ember-concurrency';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  isEditing: {
    default: false,
    description: 'Indicates whether the form is in an editing state.',
    type: PropTypes.bool,
  },
  save: {
    description: 'Function to be called when the form is submited/saved.',
    type: PropTypes.func.isRequired,
  },
  cancel: {
    description: 'Function to be called when the form is canceled.',
    type: PropTypes.func,
  },
};

export default Component.extend({
  layout,
  tagName: 'form',
  propTypes: BuilderForPropTypes(propDefinitions),
  isRunning: computed('asyncSaveTask.isRunning', 'asyncCancelTask.isRunning', function() {
    return this.get('asyncSaveTask.isRunning') || this.get('asyncCancelTask.isRunning');
  }),
  isDisabled: computed('isRunning', 'isEditing', function() {
    return this.get('isRunning') || !this.get('isEditing');
  }),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  asyncSaveTask: task(function * (asyncTask) {
      if (asyncTask) {
        yield asyncTask();
      }
      this.set('isEditing', false);
  }).drop(),

  asyncCancelTask: task(function * (asyncTask) {
      if (asyncTask) {
        yield asyncTask();
      }
      this.set('isEditing', false);
  }).drop(),


  actions: {
    edit() {
      this.set('isEditing', true);
    },

    save() {
      return this.get('asyncSaveTask').perform(this.get('save')).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    },

    cancel() {
      return this.get('asyncCancelTask').perform(this.get('cancel')).catch(e => {
        if (!didCancel(e)) {
          throw e;
        }
      });
    }
  }
});
