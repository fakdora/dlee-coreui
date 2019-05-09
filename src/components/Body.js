import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  B1: { // used by 'compare with' text in rent roll
    fontWeight: 'semiBold',
    fontSize: 2,
    fontFamily: 'sansSerif',
  },
  B2: {
    fontSize: 1,
    fontWeight: 'semiBold',
  },
  B3: {
    fontSize: 3,
    fontWeight: 'medium',
  },
  B4: { // unused
    fontSize: 3,
    fontWeight: 'medium',
  },
  B5: { // used by infofield source letters
    fontSize: 2,
    fontWeight: 'semiBold',
  },
  BR1: { // used by Gibbons for PDF. Sidebar body
    fontFamily: 'sansSerif',
    fontSize: 1,
  },
  BR3: {
    fontFamily: 'sansSerif',
    fontSize: 1,
  },
  BR4: { // used by Gibbons for PDF. Cover Sheet Property Name
    fontFamily: 'sansSerif',
    fontSize: 6,
  },
  BR5: { // used by Gibbons for PDF. Cover Sheet Property Address
    fontFamily: 'sansSerif',
    fontSize: 3,
  },
  // MONA BODY TYPES
  BM1: {
    fontWeight: 'medium',
    fontFamily: 'sansSerif',
    fontSize: 2,
  },
  BM2: {
    fontWeight: 'medium',
    fontFamily: 'sansSerif',
    fontSize: 4,
  },
};

const Body = (props) => {
  const { children, type, ...passedProps } = props;

  return (
    <Text
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      fontStyle={types[type].fontStyle}
      letterSpacing={types[type].letterSpacing}
      lineHeight={types[type].lineHeight}
      {...passedProps}
    >
      { children }
    </Text>
  );
};

Body.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

Body.defaultProps = {
  color: 'black',
};

export default Body;
