import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { hoverColor } from '../helpers/style';

import {
  ExtendedFlex,
  Body,
} from '../';


/**
 * Styling on text in a dropdown row is specialized.
 * Starts with what Body component does, but goes beyond what it's intended for.
 * This extends styling of Body to enable changes to color on hover of parent.
 *
 * Note the use of class `dropdown-row`. Using a class here is a necessity.
 * If we instead tried to use a parent element of `ExtendedFlex`, this effect would
 * always be on because higher level parent components are already that. To get
 * around this, we use a class that only gets used by immediate parent tag.
 */
const BodyInDropdownRow = styled(props => <Body {...props} />)`
  &:hover {
    cursor: pointer;
  }

  .dropdown-row:hover & {
    ${hoverColor}
  }
`;


/**
 * Single row of dropdown that is displayed when dropdown activated.
 *
 * Props:
 *
 * rowInfo (obj): Info needed for display and value to emit on click. Structure is:
 *     - label (str): Text displayed to user for the option.
 *     - value (any): What to emit on click, directly consumed by handleClick func.
 * handleClick (func): handler func that takes value of option clicked.
 * width (num or string): width of row.
 * textColor (str): color for text (not on hover).
 */
const DropdownRow = ({rowInfo, handleClick, width, textColor}) => {
  const label = rowInfo.label;
  const value = rowInfo.value;

  const onClick = (e) => {
    e.preventDefault();
    handleClick(value);
  };

  return (
    <ExtendedFlex
      className="dropdown-row"
      w={width}
      px={3}
      py={2}
      borderBottom={1}
      borderColor="gray.4"
      bg="white"
      hoverBG="blue.6"
      onClick={onClick}
    >
      <BodyInDropdownRow
        type="B1"
        color={textColor}
        hoverColor="cyan.3"
      >
        {label}
      </BodyInDropdownRow>
    </ExtendedFlex>
  );
};


DropdownRow.propTypes = {
  rowInfo: PropTypes.object,
  handleClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
};

export default DropdownRow;