import BootstrapButton from '../../bootstrap-button';
import layout from '../../../templates/components/bootstrap/-form-controls/save-button';

export default BootstrapButton.extend({
  layout,
  type: 'submit',
  classNames: ['btn-success'],

  click(event) {
    event.preventDefault();

    return this.get('action')();
  },
});
