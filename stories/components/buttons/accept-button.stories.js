/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('buttons | accept-button', module).add('without text', () => ({
  template: hbs`{{bootstrap/buttons/accept-button
    action=onClick
  }}`,
  context: {
    onClick: action('clicked'),
  },
}));
