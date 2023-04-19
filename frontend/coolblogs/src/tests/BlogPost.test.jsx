/* eslint-disable import/no-extraneous-dependencies */

import { describe, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogPost from '../components/BlogPost';

describe('BlogPost Component', () => {
  // eslint-disable-next-line no-undef
  it('renders with a post object', () => {
    const post = {
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
    };
    const { getByText } = render(<BlogPost post={post} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
