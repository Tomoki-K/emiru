import ava from 'ava';
import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';
import { SomeComponent } from './SomeComponent';

ava('can use ava', (t) => {
  t.pass();
});

ava('sample component should render text', (t) => {
  const result = ReactTestRenderer.create(
    <SomeComponent/>,
  ).root;
  t.is(result.children[0].props.children, 'SomeComponent');
});
