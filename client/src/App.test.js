import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('search for country', () => {
  const wrapper = render(<App />);
  wrapper.getAllByText(/country/i);
});

//*****HAD ISSUES WITH JEST  */

// it('renders without crashing', () => {
//   const wrapper = rtl.render(
//     <span className="greet">hello world</span>
//   );
//   const element = wrapper.queryByText(/hello/i);

//     expect(element).toBeTruthy(); // jest matcher
//     expect(element).toBeInTheDocument(); // jest-dom matcher
//     expect(element).toBeVisible(); // 
// });