import React from 'react';
import { render } from 'react-testing-library';
import TableHeader from 'components/TableHeader';

const headers = ['test', 'test2'];

test('TableHeader component receives headers props and renders it', () => {
  const { container } = render(<table><TableHeader headers={headers} /></table>);
  const node = container.querySelectorAll('th');
  expect(node.length).toBe(2);
});
