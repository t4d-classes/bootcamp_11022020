import React from 'react';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ToolHeader } from './ToolHeader';

test('snapshot ToolHeader component', () => {
  expect(
    renderer.create(<ToolHeader headerText="The Tool" />).toJSON(),
  ).toMatchSnapshot();
});

describe('ToolHeader component', () => {
  test('renders ToolHeader component', () => {
    const { getByText, getByRole, getAllByRole } = render(
      <ToolHeader headerText="The Tool" />,
    );

    // expect(getByText('The Tool').textContent).toBe('The Tool');
    expect(getByText('The Tool')).toBeInTheDocument();

    expect(getByRole('heading').textContent).toBe('The Tool');
  });
});
