import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  space,
  display,
  borders,
  borderColor,
  width,
  propTypes,
  color,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  alignSelf,
  borderRadius,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  top,
  right,
  bottom,
  left,
} from 'styled-system';
import CleanElement from 'clean-element';

import {
  height,
  responsiveBackgroundSize,
  hoverRemoveFilterEffect,
} from '../helpers/style';

const CleanBox = CleanElement('div');

CleanBox.propTypes = {
  ...propTypes.borderColor,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.maxWidth,
  ...propTypes.borderBottom,
  ...propTypes.borderTop,
  ...propTypes.borderRight,
  ...propTypes.borderLeft,
  ...propTypes.bottom,
  ...propTypes.top,
  ...propTypes.right,
  ...propTypes.left,
  ...propTypes.zIndex,
  ...propTypes.maxWidth,
  ...propTypes.minWidth,
  ...propTypes.minHeight,
  ...propTypes.maxHeight,
  ...propTypes.borderRadius,
  ...propTypes.backgroundImage,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.backgroundSize,
  ...propTypes.backgroundPosition,
  ...propTypes.backgroundRepeat,
  ...propTypes.textAlign,
  ...propTypes.width,
  boxSizing: PropTypes.string,
  boxShadow: PropTypes.string,
  hover: PropTypes.bool,
  transition: PropTypes.string,
  hoverShadow: PropTypes.bool,
  hoverRemoveFilter: PropTypes.bool,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
  rbgSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
};

const ExtendedBox = styled(CleanBox)`
  ${space}
  ${width}
  ${height}
  ${borders}
  ${borderColor}
  ${color}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${maxHeight}
  ${borderRadius}
  ${backgroundImage}
  ${backgroundSize}
  ${responsiveBackgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${display}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${position}
  ${alignSelf}
  visibility: ${props => props.visibility || 'visible'};
  opacity: ${props => props.opacity || '1'};
  z-index: ${props => props.zIndex || 'auto'};
  overflow-x: ${props => props.overflowX || 'visible'};
  overflow-y: ${props => props.overflowY || 'visible'};
  box-sizing: ${props => props.boxSizing || 'content-box'};
  transition: ${props => props.transition || 'all 0s 0s ease'};
  box-shadow: ${props => (props.boxShadow || 'none')};
  ${props => (props.transform ? `transform: ${props.transform};` : null)}

  &:hover {
    box-shadow: ${props => (props.hoverBoxShadow || (props.boxShadow || 'none'))};
    cursor: ${props => (props.hover ? 'pointer' : 'auto')};
    ${props => (props.hoverRemoveFilter ? hoverRemoveFilterEffect : '')}
  }
`;

// IMPORTANT: ${props => (props.transform ? `transform: ${props.transform};` : null)} must remain
// because fucking IE messes up absolutely positioned items if its parent has a css transform
// attribute set.

export default ExtendedBox;
