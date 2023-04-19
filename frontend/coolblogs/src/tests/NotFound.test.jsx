/* eslint-disable no-undef */
import { describe, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../routes/NotFound';

describe('NotFound', () => {
  it('should render the footer component', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('404')).toBeTruthy();
    expect(getByText('Page not found')).toBeTruthy();
    expect(
      getByText('Sorry, the page you are looking for does not exist.')
    ).toBeTruthy();
  });
});
