/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { describe, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('should render the header component', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Cool Blogs')).toBeTruthy();
  });
});
