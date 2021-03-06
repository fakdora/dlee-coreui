import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  ExtendedBox,
  Link,
  InlineTextLink,
  Body,
  Data,
} from '../src';
import { types } from '../src/components/Link';


Object.keys(types).reduce((accum, type) => {
  return accum.add(type, () => (
    <div>
      <ExtendedBox
        pb="30px"
      >
        <Link
          type={type}
        >
          Responsive {type}.
        </Link>
      </ExtendedBox>
      <ExtendedBox
        pb="30px"
      >
        <Link
          type={type}
        >
          min
        </Link>
      </ExtendedBox>
      <ExtendedBox
        pb="30px"
      >
        <Link
          type={type}
        >
          View Investments
        </Link>
      </ExtendedBox>
      <ExtendedBox
        pb="30px"
      >
        <Link
          type={type}
        >
          {type} expands if much text
        </Link>
      </ExtendedBox>
      <ExtendedBox
        pb="30px"
      >
        <Link
          type={type}
        >
          {type} can also wrap to multiple lines, but don&#39;t abuse that
        </Link>
      </ExtendedBox>
    </div>
  ));
}, storiesOf('Link', module));


// InlineTextLink follows different format.
storiesOf('Link', module)
  .add('InlineTextLink', () => (
    <React.Fragment>
      <ExtendedBox m={20} w={400}>
        <Body
          type="B1"
        >
          InlineTextLink is intended to be a very basic link that lives inside of other
          blocks of text. For example, you might want to have a{' '}
          <InlineTextLink
            href="http://www.asofterworld.com/index.php?id=1176"
          >
            link to a webcomic
          </InlineTextLink>
          {' '}in the middle of your B1 Body, but no major style differences.
        </Body>
      </ExtendedBox>
      <ExtendedBox m={20} w={400}>
        <Body
          type="B2"
        >
          This comes with a default link color and hoverColor, but can be overriden with props.
          By the way, this is also a sample of seeing a{' '}
          <InlineTextLink
            color="green"
            hoverColor="red"
            href="http://www.asofterworld.com/index.php?id=1176"
          >
            link
          </InlineTextLink>
          {' '}in the middle of a B2 Body with color and hoverColor set differently.
        </Body>
      </ExtendedBox>
      <ExtendedBox m={20} w={400}>
        <Body
          type="B4"
        >
          Body B4 Sampler with a{' '}
          <InlineTextLink
            href="http://www.asofterworld.com/index.php?id=1176"
          >
            link.
          </InlineTextLink>
        </Body>
      </ExtendedBox>
      <ExtendedBox m={20} w={400}>
        <Data
          type="D2"
        >
          Data D2 Sampler with a{' '}
          <InlineTextLink
            href="http://www.asofterworld.com/index.php?id=1176"
          >
            link
          </InlineTextLink>
          {' '}in the middle.
          <br />
          Another note for Devs: React elements like to eat space characters.
          You can work around with margins or putting in {`{' '}`} JSX weirdness to force a space.
          (see the source of this story for an example of second)
        </Data>
      </ExtendedBox>
    </React.Fragment>
  ));