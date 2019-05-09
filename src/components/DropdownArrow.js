import React from 'react';
import PropTypes from 'prop-types';

import DropdownRow from './DropdownRow.js';

import {
  ExtendedFlex,
  Image,
} from '../';

import dropdownIcon from '../assets/dropdown_icon.svg';


/**
 * Dropdown of options that can be clicked to fire callback on value of dropdown option.
 *
 * Dropdown is currently activated on hover of dropdown icon.
 * If we need to support mobile/touch, this will not work as currently built.
 *
 * Props:
 *
 * dropdownChoices (arr of objs): Info needed for options. See below for more info.
 * handleClick (func): Handler that takes one arg: value of option clicked.
 *
 * State:
 *
 * showDropdown (bool): Whether dropdown is currently shown to user (active).
 *
 * Note on structure of `dropdownChoices`:
 * dropdownChoices is an array of objects. Each object represents one option in dropdown.
 * Each object has two mandatory properties --
 *   - label (str): Text displayed to user for the option.
 *   - value (any): What to emit on click, directly consumed by handleClick func.
 */
class DropdownArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }


  openDropdown() {
    this.setState({
      showDropdown: true,
    });
  }

  closeDropdown() {
    this.setState({
      showDropdown: false,
    });
  }


  render() {
    const {
      dropdownChoices,
      handleClick,
    } = this.props;

    const showDropdown = this.state.showDropdown;

    return (
      <ExtendedFlex
        position="relative"
        height={30}
        w={30}
        px={1}
        justify="center"
        align="center"
        bg="gray.5"
        onMouseEnter={this.openDropdown}
        onMouseLeave={this.closeDropdown}
      >
        <Image
          src={dropdownIcon}
        />
        <ExtendedFlex
          display={showDropdown ? 'block' : 'none'}
          flexDirection="column"
          zIndex="9"
          position="absolute"
          top={30}
          right={0}
          border={1}
          borderColor="gray.4"
          onClick={this.closeDropdown}
        >
          {dropdownChoices.map((rowInfo) => (
            <DropdownRow
              key={rowInfo.label}
              rowInfo={rowInfo}
              handleClick={handleClick}
              width={200}
              textColor="gray.9"
            />
          ))}
        </ExtendedFlex>
      </ExtendedFlex>
    );
  }
}

DropdownArrow.propTypes = {
  dropdownChoices: PropTypes.array,
  handleClick: PropTypes.func,
};

export default DropdownArrow;
