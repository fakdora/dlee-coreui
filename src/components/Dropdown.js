import React from 'react';
import PropTypes from 'prop-types';

import onClickOutside from "react-onclickoutside";

import DropdownList from './DropdownList';

import {
  ExtendedFlex,
  Body,
  Image,
} from '../';

import dropdownIcon from '../assets/dropdown_caret_borrower.svg';


/**
 * Dropdown of options that can be clicked to fire callback on value of clicked option.
 *
 * Dropdown is activated by clicking on it.
 * Dropdown box then appears. Clicking an option fires callback with that value, closes dropdown.
 * Clicking anywhere else will close dropdown and nothing else will happen.
 *
 * Props:
 *
 * chosenValue (str): What to display as currently chosen. If falsy, not shown.
 * description (str): Displayed clearly if chosenValue falsy, otherwise displayed small.
 * width (num): In pixels, width of entire dropdown.
 * handleClick (func): Callback for clicking an option. Takes one arg: value of option clicked.
 * dropdownChoices (arr of objs): Info needed for options. See below for more info.
 *
 * State:
 *
 * showDropdown (bool): Whether dropdown is currently shown to user (active).
 *
 * Note on structure of `dropdownChoices`:
 * dropdownChoices is an array of objects. Each object represents one option in dropdown.
 * Each object has two mandatory properties --
 *   - label (str): Text displayed to user for the option.
 *   - value (any): What to emit to click handler, directly consumed by handleClick func.
 */
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleParentClick = this.handleParentClick.bind(this);
  }

  /**
   * `handleClickOutside` is a special method tied to use of `onClickOutside`.
   * onClickOutside is a HOC that wraps Dropdown component.
   * This method fires whenever a click is detected outside the component.
   */
  handleClickOutside(event) {
    this.closeDropdown();
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

  handleParentClick() {
    if (this.state.showDropdown) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  render() {
    const { showDropdown } = this.state;
    const {
      width,
      chosenValue,
      description,
      dropdownChoices,
      // `handleClick` is for clicks on choices in dropdown list
      handleClick,
    } = this.props;

    return (
      <ExtendedFlex
        position="relative"
        onClick={this.handleParentClick}
        flexDirection="row"
        height={50}
        width={width}
        pt="25px"
        pb="10px"
        pl="10px"
        borderColor="gray.4"
        borderBottom="1px solid"
        bg="white"
      >
        <ExtendedFlex
          position="absolute"
          top={5}
          left={10}
        >
          <Body
            type="BM1"
            color="gray.2"
            m={0}
          >
            {chosenValue ? description : null}
          </Body>
        </ExtendedFlex>
        <ExtendedFlex
          position="absolute"
          right={40}
          bottom={10}
        >
          <Image
            src={dropdownIcon}
            hover
          />
        </ExtendedFlex>
        <Body
          type="BM2"
          color="gray.1"
          m={0}
        >
          {chosenValue ? chosenValue : description}
        </Body>
        {showDropdown ?
          <DropdownList
            width={width}
            dropdownChoices={dropdownChoices}
            handleClick={handleClick}
            closeDropdown={this.closeDropdown}
          />
          : null
        }
      </ExtendedFlex>
    );
  }
}


Dropdown.propTypes = {
  width: PropTypes.number,
  chosenValue: PropTypes.string,
  description: PropTypes.string,
  dropdownChoices: PropTypes.array,
  handleClick: PropTypes.func,
};

export default onClickOutside(Dropdown);
