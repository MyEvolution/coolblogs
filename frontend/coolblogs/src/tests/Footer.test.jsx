/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

import { describe, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

// check if footer component is rendered

describe('Footer', () => {
  it('should render the footer component', () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText('CoolBlogs Developed by Adam and Alaaeldean 2023')
    ).toBeTruthy();
  });
});
