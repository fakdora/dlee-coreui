import React from 'react';
import PropTypes from 'prop-types';

import DropdownRow from './DropdownRow.js';

import {
  ExtendedFlex,
} from '../';

/**
 * Dropdown box container that appears when `Dropdown` components is showing its dropdown.
 *
 * Props:
 *
 * width (num): In pixels, width of dropdown box.
 * dropdownChoices (arr of objs): Info needed for options. See `Dropdown` component for info.
 * handleClick (func): Callback for clicking an option. Takes one arg: value of option clicked.
 */
const DropdownList = ({ width, dropdownChoices, handleClick }) => {
  const BORDER_WIDTH = 1; // px
  // To avoid offset due to borders, we need to adjust row width accordingly.
  const rowWidth = width - (2 * BORDER_WIDTH)

  return (
    <ExtendedFlex
      position="absolute"
      top={50}
      left={0}
      flexDirection="column"
      width={width}
      boxShadow="0 1px 5px 0 rgba(0, 0, 0, 0.3)"
      borderColor="gray.4"
      borderLeft={`${BORDER_WIDTH}px solid`}
      borderRight={`${BORDER_WIDTH}px solid`}
    >
      {dropdownChoices.map((rowInfo) => (
        <DropdownRow
          key={rowInfo.label}
          width={rowWidth}
          rowInfo={rowInfo}
          handleClick={handleClick}
          textColor="gray.1"
        />
      ))}
    </ExtendedFlex>
  );
};


DropdownList.propTypes = {
  width: PropTypes.number,
  dropdownChoices: PropTypes.array,
  handleClick: PropTypes.func,
};

export default DropdownList;
