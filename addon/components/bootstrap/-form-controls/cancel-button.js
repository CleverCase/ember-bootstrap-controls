import BootstrapButton from '../../bootstrap-button';
import layout from '../../../templates/components/bootstrap/-form-controls/cancel-button';

export default BootstrapButton.extend({
  layout,
  classNames: ['btn-secondary'],

  click(event) {
    event.preventDefault();

    return this.get('action')();
  },
});
