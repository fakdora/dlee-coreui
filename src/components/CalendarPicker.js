import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

import {
  ExtendedFlex,
  Body,
  Image,
} from '../';

import calendarIcon from '../assets/calendar_icon_borrower.svg';


/**
 * Custom calendar opener/display to override `DatePicker` default input field.
 *
 * Clicking in this component causes the date picker to open.
 * When a date is selected, this component displays selected date. Also has description.
 * Must be a class component (as opposed to functional) for how react-datepicker uses it.
 *
 * Props:
 *
 * onClick (func): [Automatically supplied by DatePicker below.]
 * value (str): [See notes below. Automatically supplied by DatePicker below.]
 * width (num or str): Width of this component.
 * description (str): Displayed clearly if `value` falsy, otherwise displayed small.
 *
 * Notes on `value` prop:
 * Even though DatePicker handles its dates internally as `moment` objects, the `value` prop
 * we receive here is always a string formatted according to `dateFormat` in DatePicker.
 * If `selected` in DatePicker is null/undefined, value will be an empty string.
 */
class CustomCalendarOpener extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onClick,
      value,
      width,
      description,
    } = this.props;

    return (
      <ExtendedFlex
        onClick={onClick}
        position="relative"
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
            {value ? description : null}
          </Body>
        </ExtendedFlex>
        <ExtendedFlex
          position="absolute"
          right={40/*This is tied to StyleWrapper below! If changing, adjust both!*/}
          bottom={10}
        >
          <Image
            src={calendarIcon}
            hover
          />
        </ExtendedFlex>
        <Body
          type="BM2"
          color="gray.1"
          m={0}
        >
          {value ? value : description}
        </Body>
      </ExtendedFlex>
    );
  }
}


/**
 * Wrapper so we can change CSS on the datepicker component.
 *
 * Was not able to directly `styled` the DatePicker component due to strangeness
 * with react-datepickerlibrary. Uncertain, but it seems like it somehow manages
 * to remove the classes set by `styled` during its render process...
 * As a workaround, this gives us a div where we can set styling on class names
 * we want to affect, then we just wrap it around our DatePicker.
 *
 * NOTE: The spacing on the triangle is connected to placement of calendarIcon image above!
 * Intent is for the datepicker's triangle to point at icon. If changing, adjust both!
 */
const StyleWrapper = styled.div`
  .react-datepicker__triangle {
    left: auto;
    right: 37px;
  }
`;


/**
 * Date selector that opens a calendar for interaction. Displays description and chosen date.
 *
 * DatePicker component internally relies on `moment` objects.
 * If you need to manually set a date (eg, selectedDate), make sure to use moment.
 *
 * Props:
 *
 * handleDateChoice (func): Callback on date choice. Takes one arg: `moment` obj of chosen date.
 * width (num or str): CustomCalendarOpener width (where date displayed). No impact on calendar.
 * description (str): Description of what date is for, shown in CustomCalendarOpener.
 *
 * State:
 *
 * selectedDate (null or obj [moment]): Starts null for no selection. Otherwise is `moment` obj.
 *
 * Note on styling calendar:
 * If you need to change CSS for the calendar itself, find the appropriate classes to affect,
 * then add your style rules for those classes to `StyleWrapper` above.
 */
class CalendarPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }


  // This method is called whenever a date is selected in the opened calendar.
  // Input of `date` is a `moment` object.
  handleChange(date) {
    const { handleDateChoice } = this.props;
    handleDateChoice(date);
    this.setState({
      selectedDate: date
    });
  }


  render() {
    const {
      width,
      description,
    } = this.props;

    return (
      <StyleWrapper>
        <DatePicker
          customInput={
            <CustomCalendarOpener
              width={width}
              description={description}
            />
          }
          selected={this.state.selectedDate}
          onChange={this.handleChange}
          dateFormat="MM/DD/YY"
          minDate={moment()}
          popperPlacement="bottom-end"
        />
      </StyleWrapper>
    );
  }
}


CalendarPicker.propTypes = {
  handleDateChoice: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.string,
};

export default CalendarPicker;
