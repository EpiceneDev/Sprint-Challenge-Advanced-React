import React from 'react';
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('App renders', async() => {
  const app = await rtl.render(<App />)
  const dark = await app.getByText(/dark mode/i);
  rtl.fireEvent.click(dark);
  let body = document.getElementsByTagName('body');
  expect(body[0].classList.contains('dark-mode')).toBe(true);
  rtl.fireEvent.click(dark);
  expect(body[0].classList.contains('dark-mode')).toBe(false);
})