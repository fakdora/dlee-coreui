// import React from 'react';
import styled from 'styled-components';

const Pagebreak = styled.div`
  break-before: always;
  page-break-inside: avoid;
  display: block;  // optional. must be sure it is block item in document flow
  clear: both;   // optional. use only if you are using float
  width: 100%;
`;

export default Pagebreak;
