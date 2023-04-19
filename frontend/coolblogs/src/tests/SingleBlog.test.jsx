/* eslint-disable no-undef */
import { describe, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SingleBlog from '../routes/SingleBlog';

// check if footer component is rendered

describe('SingleBlog', () => {
  it('should render a single blog post', () => {
    const { getByText } = render(<SingleBlog />);
    expect(getByText(state.currentPost.title)).toBeTruthy();
    expect(getByText(state.currentPost.content)).toBeTruthy();
  });
});
