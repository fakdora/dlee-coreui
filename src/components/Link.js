import React from 'react';
import PropTypes from 'prop-types';
import { TextLink } from '../';

// FIXME: Move this into helpers/style since this is being used by NavLink
export const types = {
  // used by dropdown items in user menu (e.g. logout)
  // many of these styles are from rm-coreui and will not be necessary
  L1: {
    fontSize: 12,
    fontFamily: 'sansSerif',
    fontWeight: 500,
    textDecoration: 'none',
  },
  // used by primary nav
  L2: {
    fontSize: [14],
    fontFamily: 'sansSerif',
    fontWeight: 600,
    bg: 'transparent',
    color: 'white',
    hoverColor: 'white',
    hoverBG: 'transparent',
    textTransform: 'uppercase',
    textDecoration: 'none',
    hoverBorderColor: 'white',
    textAlign: 'center',
  },
  // Transparent background, black font, black border
  L3: {
    fontSize: [10, 10, 10, 10, 12],
    fontFamily: 'sansSerif',
    fontWeight: 500,
    bg: 'transparent',
    color: 'black',
    hoverColor: 'white',
    hoverBG: 'black',
    letterSpacing: '0.250em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: '1px solid',
    hoverBorderColor: 'black',
    minWidth: [200, 200, 230, 230, 260],
    maxWidth: [260, 260, 300, 300, 340],
    px: [20, 20, 20, 20, 20], // Padding X (horizontal) -- from styled-system
    py: [15, 15, 17, 17, 24], // Padding Y (vertical) -- from styled-system
    lineHeight: '1.5em',
    display: 'inline-block',
    textAlign: 'center',
  },
  // Blue font link
  L4: {
    fontSize: [10, 10, 12, 12, 12],
    fontFamily: 'sansSerif',
    fontWeight: 500,
    bg: 'none',
    color: 'blue.0',
    letterSpacing: '0.150em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  // global nav
  L5: {
    fontSize: [10, 10, 10, 10, 12],
    fontFamily: 'sansSerif',
    fontWeight: 500,
    bg: 'transparent',
    color: 'black',
    letterSpacing: '0.250em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  // footer links
  L6: {
    fontSize: [10, 10, 10, 10, 11],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    bg: 'transparent',
    color: 'black',
    letterSpacing: 'normal',
    textTransform: 'none',
    textDecoration: 'none',
  },
  L7: {
    fontSize: [10, 10, 10, 10, 12],
    fontFamily: 'sansSerif',
    fontWeight: 'normal',
    bg: 'transparent',
    color: 'black',
    letterSpacing: 'normal',
    textTransform: 'none',
    textDecoration: 'none',
    px: 20,
    py: 5,
    border: '1px solid',
    borderColor: 'black',
    hoverBG: 'black',
    hoverColor: 'white',
  },

  // MONA LINK TYPES
  LM1: {
    fontSize: 3,
    fontFamily: 'sansSerif',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '60px',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },

  // ARTEMIS
  LA1: {  // LinksHeaderNavigationWhite
    fontFamily: 'sansSerifLight',
    fontSizes: '14px',
    fontWeight: 'semiBold',
  },
  LA2: {  // LinksMLeftBlue, LinksMCenterLt
    fontFamily: 'sansSerifLight',
    fontSizes: '15px'
  },
};

const Link = (props) => {
  const { children, type, ...passedProps } = props;

  return (
    <TextLink
      fontSize={types[type].fontSize}
      fontFamily={types[type].fontFamily}
      fontWeight={types[type].fontWeight}
      textTransform={types[type].textTransform}
      letterSpacing={types[type].letterSpacing}
      textDecoration={types[type].textDecoration}
      border={types[type].border}
      borderColor={types[type].borderColor}
      width={types[type].width}
      height={types[type].height}
      maxWidth={types[type].maxWidth}
      minWidth={types[type].minWidth}
      px={types[type].px}
      py={types[type].py}
      lineHeight={types[type].lineHeight}
      display={types[type].display}
      textAlign={types[type].textAlign}
      bg={types[type].bg}
      color={types[type].color}
      hoverBG={types[type].hoverBG}
      hoverColor={types[type].hoverColor ? types[type].hoverColor : 'black'}
      hoverBorderColor={types[type].hoverBorderColor}
      {...passedProps}
    >
      { children }
    </TextLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
};

export default Link;
