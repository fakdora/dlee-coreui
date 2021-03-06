import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  D1: {
    fontSize: [8, 8, 8, 9, 10],
    fontFamily: 'sansSerif',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.150em',
    lineHeight: 2.1,
  },
  D2: {
    fontSize: [9, 9, 13, 13, 15],
    fontFamily: 'sansSerif',
    fontWeight: 700,
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 2.1,
  },
  D3: {
    fontSize: [10, 10, 12, 12, 15],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  D4: {
    fontSize: [10, 10, 10, 10, 12],
    fontFamily: 'sansSerif',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: 1.5,
  },
  D5: {
    fontSize: [11, 11, 12, 13, 16],
    fontFamily: 'sansSerif',
    fontWeight: 700,
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 2.1,
  },
  D6: {
    fontSize: [16, 16, 20, 20, 24],
    fontFamily: 'sansSerif',
    fontWeight: 700,
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  D7: {
    fontSize: [60, 60, 60, 60, 60],
    fontFamily: 'sansSerif',
    fontWeight: 500,
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  D8: {
    fontSize: [72, 72, 72, 72, 72],
    fontFamily: 'sansSerif',
    fontWeight: 700,
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },

  // ARTEMIS
  DA1: {  // ChartsSLabelsRightLt, ChartsSLabelsCenterLt, ChartsSLabelsLeftLt
    fontFamily: 'sansSerifLight',
    fontSize: '11px',
  },
  DA2: {  // DataColumn-*
    fontFamily: 'sansSerifLight',
    fontSize: '10px',
    letterSpacing: '0.8px',
    lineHeight: '1.2',
  },
  DA3: {  // DataMetricLRightWhite, DataMetricLRightGrey
    fontFamily: 'sansSerifLight',
    fontSize: '17px',
  },
};

const Data = (props) => {
  const { children, type, ...passedProps } = props;

  return (
    <Text
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      letterSpacing={types[type].letterSpacing}
      lineHeight={types[type].lineHeight}
      {...passedProps}
    >
      { children }
    </Text>
  );
};

Data.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

Data.defaultProps = {
  color: 'black', // NOTE: Not "trueblack" (#000000), Will use Theme's black[-ish].
};

export default Data;
