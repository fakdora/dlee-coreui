import React from 'react';
import { storiesOf } from '@storybook/react';

// import {
//   StyledSelect,
// } from '../src/coreui/Select';
import {Button} from '../src/coreui/Button';
// import { types } from '../src/components/Heading';

// Object.keys(types).reduce((accum, type) => {
//   return accum.add(type, () => (
//     <Heading
//       type={type}
//     >
//       This is a responsive {type} Heading.
//     </Heading>
//   ));
// }, storiesOf('Heading1', module));

storiesOf('StyledSelect', module)
  .add('with text', () => (
    <Button>hey</Button>
  ));
