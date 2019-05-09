import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * The `Dropdown` component basically needs to be supported by a container
 * that maintains state for what the chosen value is -- it's pointless for it
 * to maintain its own state, as the chosen value needs to be used by the
 * parent container to emit to whatever will consume the choice.
 *
 * You can see a sample of how such a container would work
 * by looking in the `DropdownInContainer` file.
 */
import DropdownInContainer from './DropdownInContainer';

import {
  DropdownArrow,
  ExtendedFlex,
} from '../src';


const sampleDropdownChoices = [
  {
    label: 'First Option',
    value: 'firstOption',
  },
  {
    label: 'Second Option',
    value: 'secondOption',
  },
];

const sampleHandleClick = (fieldValue) => {
  alert('You clicked this value: ' + fieldValue);
};


storiesOf('Dropdown', module)
  .add('Dropdown', () => (
    <ExtendedFlex
      ml={100}
      mt={20}
    >
      <DropdownInContainer />
    </ExtendedFlex>
  ))
  .add('DropdownArrow', () => (
    <ExtendedFlex
      ml={300}
      mt={20}
    >
      <DropdownArrow
        dropdownChoices={sampleDropdownChoices}
        handleClick={sampleHandleClick}
      />
    </ExtendedFlex>
  ));
