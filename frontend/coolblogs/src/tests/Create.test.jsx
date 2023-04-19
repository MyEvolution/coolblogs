/* eslint-disable import/no-extraneous-dependencies */
import { expect, test } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Create from '../routes/Create';

test('renders input fields and submit button', () => {
  const { getByPlaceholderText, getByText } = render(<Create />);
  const titleInput = getByPlaceholderText('Type your title here!');
  const bodyInput = getByPlaceholderText('Type your blog post here!');
  const submitButton = getByText('Submit!');

  expect(titleInput).toBeInTheDocument();
  expect(bodyInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('updates input fields upon typing', () => {
  const { getByPlaceholderText } = render(<Create />);
  const titleInput = getByPlaceholderText('Type your title here!');
  const bodyInput = getByPlaceholderText('Type your blog post here!');

  fireEvent.change(titleInput, { target: { value: 'Test Title' } });
  fireEvent.change(bodyInput, { target: { value: 'Test Body' } });

  expect(titleInput.value).toBe('Test Title');
  expect(bodyInput.value).toBe('Test Body');
});
