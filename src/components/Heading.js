import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

export const types = {
  // used by 'In Place / Stabilized' in rent roll
  H1: {
    fontFamily: 'sansSerif',
    fontSize: 3,
    fontWeight: 'semiBold',
  },
  // used by Create Deal heading
  H2: {
    fontFamily: 'sansSerif',
    fontSize: 8,
    fontWeight: 'light',
  },
  // used by FormPageHeading
  H3: {
    fontFamily: 'sansSerif',
    fontSize: 7,
    fontWeight: 'light',
  },
  // used by Gibbons for PDF. Sidebar header
  HR1: {
    fontFamily: 'sansSerif',
    fontSize: 0,
    fontWeight: 'semiBold',
  },
  // used by Gibbons for PDF. Property Name Header
  HR2: {
    fontFamily: 'sansSerif',
    fontSize: 5,
    fontWeight: 'bold',
  },
  // used by Gibbons for PDF. Property Address Header, Page Sub-section
  HR3: {
    fontFamily: 'sansSerif',
    fontSize: 1,
    fontWeight: 'bold',
  },
  // used by Gibbons for PDF. Property Address, Page Section
  HR4: {
    fontFamily: 'sansSerif',
    fontSize: 3,
    fontWeight: 'bold',
  },
  // MONA HEADER TYPES
  HM1: {
    fontFamily: 'sansSerifLight',
    fontSize: 7,
    fontWeight: 'light',
  },
  HM2: {
    fontFamily: 'sansSerif',
    fontSize: 2,
    fontWeight: 'light',
  },

  // ARTEMIS
  HA1: {  // HeadingsELeftBlue
    fontFamily: 'sansSerifLight',
    fontSize: '15px',
    fontWeight: 'semiBold'
  },
  HA2: {  // AsideSection-HeadLeft, HeadingsCLeftDk-Grey
    fontFamily: 'sansSerifLight',
    fontSize: '22px',
    fontWeight: 'book'
  },
  HA3: {  // HeadingsBLeftGrey
    fontFamily: 'sansSerifLight',
    fontSize: '24px',
    fontWeight: 'light'
  },
  HA4: {  // HeadingsBRightDk-Grey
    fontFamily: 'sansSerifLight',
    fontSize: '24px',
  },
  HA5: {  // HeadingsALeftBlue, HeadingsACenterBlue
    fontFamily: 'sansSerifLight',
    fontSize: '35px',
    fontWeight: 'light'
  }
};

const Heading = (props) => {
  const { children, type, ...passedProps } = props;

  return (
    <Text
      display="block"
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

Heading.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

Heading.defaultProps = {
  color: 'black',
};

export default Heading;
