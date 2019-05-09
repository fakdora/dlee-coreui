import React from 'react';

import { Dropdown } from '../src';


const sampleDropdownChoices = [
  {
    label: 'First Choice',
    value: 'First Choice',
  },
  {
    label: 'Second Choice',
    value: 'Second Choice',
  },
  {
    label: 'Third Choice',
    value: 'Third Choice',
  },
];


class DropdownInContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenValue: null,
    };

    this.sampleHandleClick = this.sampleHandleClick.bind(this);
  }

  sampleHandleClick(fieldValue) {
    this.setState({
      chosenValue: fieldValue,
    });
  }

  render() {
    const {
      chosenValue,
      description,
    } = this.state;

    return (
      <Dropdown
        chosenValue={chosenValue}
        description="Awesome Dropdown"
        dropdownChoices={sampleDropdownChoices}
        handleClick={this.sampleHandleClick}
        width={400}
      />
    );
  }
}

export default DropdownInContainer;
