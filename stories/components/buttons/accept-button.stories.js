/* eslint-disable import/extensions */
import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, withKnobs } from '@storybook/addon-knobs';


const stories = storiesOf('buttons | accept-button', module);

stories.addDecorator(withKnobs);

stories.add(
  'without text',
  () => ({
    template: hbs`{{bootstrap/buttons/accept-button
      action=onClick
    }}`,
    context: {
      onClick: action('clicked')
    },
  }),
  {
    notes: 'Super simple notes?'
  }
);
stories.add(
  'with text',
  () => ({
    template: hbs`{{bootstrap/buttons/accept-button
      action=onClick
      buttonText=buttonText
    }}`,
    context: {
      onClick: action('clicked'),
      buttonText: text('Button Text', 'Yes')
    },
  }),
);
