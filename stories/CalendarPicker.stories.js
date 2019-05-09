import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  CalendarPicker,
  ExtendedFlex,
} from '../src';

// Note that `chosenDate` will be a Moment.js object and we're using its format method.
const exampleHandleDateChoice = (chosenDate) => {
  alert('You chose this date: ' + chosenDate.format('MMMM D, YYYY'))
};

storiesOf('CalendarPicker', module)
  .add('CalendarPicker', () => (
    <ExtendedFlex
      ml={100}
      mt={20}
    >
      <CalendarPicker
        handleDateChoice={exampleHandleDateChoice}
        width={400}
        description="Description of Date Being Picked"
      />
    </ExtendedFlex>
  ));
