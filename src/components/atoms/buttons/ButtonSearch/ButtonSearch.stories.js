import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ButtonSearch from '.';
import buttonSearchOptions from './ButtonSearch.knobs.options';
import ButtonSearchReadme from './ButtonSearch.md';

storiesOf('atoms/buttons', module)
  .addDecorator(withKnobs)
  .add(
    'ButtonSearch',
    withInfo(`<div>${ButtonSearchReadme}</div>`)(() => {
      const buttonSearchOptionsWithKnobs = Object.assign(...Object.entries(buttonSearchOptions).map(([k, v]) => (
        { [k]: v(ButtonSearch.defaultProps[k]) })));
      buttonSearchOptionsWithKnobs.onClick = action('on-click');

      return(<ButtonSearch {...buttonSearchOptionsWithKnobs} />);
    })
  );
