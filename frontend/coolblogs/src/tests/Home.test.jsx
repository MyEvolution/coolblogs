/* eslint-disable no-undef */
import { describe, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../routes/Home';

// check if footer component is rendered

describe('Home', () => {
  it('should render posts from home page', () => {
    const { getByText } = render(<Home />);
    expect(getByText(state.allPosts.title)).toBeTruthy();
    expect(getByText(state.allPosts.content)).toBeTruthy();
  });
});
