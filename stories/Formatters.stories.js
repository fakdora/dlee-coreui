import React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from '../src/Theme';

import {
  Numeral,
} from '../src';

storiesOf('Formatters', module)
  .add('Numeral', () => (
    // TODO: Clean up this presentation.
    <React.Fragment>
      <div>Input: 7500000</div>
      <div>Formatter: 0.0mm</div>
      <div>Output: <Numeral value={7500000} format="0.0mm" /></div>
    </React.Fragment>
  ));
