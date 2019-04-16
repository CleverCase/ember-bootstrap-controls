import Component from '@ember/component';
import layout from '../../templates/components/progress-bars/-bar';

export default Component.extend({
  layout,
  classNames: ['progress-bar'],
  attributeBindings: [
    'role',
    'currentValue:aria-valuenow',
    'minimumValue:aria-valuemin',
    'maximumValue:aria-valuemax'
  ],
  role: 'progressbar',

  minimumValue: 0,
  maximumValue: 100,
  currentValue: 100,

  updateStyles() {
    const max = this.get('maximumValue');
    const min = this.get('minimumValue');
    const total = max - min;
    const current = this.get('currentValue');
    const completed = current - min;
    const percentCompleted = Math.floor(completed / total * 100);
    this.element.style.width = `${percentCompleted}%`;
  },

  didInsertElement() {
    this.updateStyles();
  },
  didUpdateAttrs() {
    this.updateStyles();
  }
});
