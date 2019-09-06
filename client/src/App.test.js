import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('search for strike', () => {
  const wrapper = render(<App />);
  wrapper.getAllByText(/player/i);
});
