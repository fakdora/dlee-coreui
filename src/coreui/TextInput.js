import styled from 'styled-components';
import {
  color,
  fontSize,
  borders,
  borderColor,
  width,
  space,
  textAlign,
  lineHeight,
  fontWeight,
} from 'styled-system';

import { Theme } from '../';

const TextInput = styled.input.attrs({
  type: props => props.textType || 'text',
})`
  ${color}
  ${fontSize}
  ${width}
  ${lineHeight}
  ${space}
  ${fontWeight}
  ${textAlign}
  ${borders}
  ${borderColor}
  box-sizing: border-box;
  font-family: ${props => Theme[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
  box-shadow: none;
  height: 30px;
  display: ${props => props.display || 'inline'};
  text-indent: ${props => props.textIndent || '0'}

  &::placeholder {
    font-size: ${props => Theme[props.placeholderFontSize] || fontSize}
    font-family: ${props => Theme[props.fontFamily] || 'Helvetica, Arial, sans-serif'};
    font-weight: ${props => Theme[props.placeholderFontWeight] || fontWeight}
  }
`;

export default TextInput;
