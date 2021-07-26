import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MyCounter } from './Counter';

describe('counter', ()=> {
  beforeEach(()=> {
    render(<MyCounter />);
  })

  it('to be rendered', () => {

    const counter = screen.getByText(/counter/i);
    expect(counter).toBeInTheDocument();
  });

  it('increment once, result is 1', () => {

    userEvent.click(screen.getByRole('button', {name:/increment/i}));
    const counter = screen.getByText(/counter 1/i);
    expect(counter).toBeInTheDocument();
  });

  it('increment three times, result is 3', () => {

    userEvent.click(screen.getByRole('button', {name:/increment/i}));
    userEvent.click(screen.getByRole('button', {name:/increment/i}));
    userEvent.click(screen.getByRole('button', {name:/increment/i}));
    const counter = screen.getByText(/counter 3/i);
    expect(counter).toBeInTheDocument();
  });

  it('decrement once, result is -1', () => {
    userEvent.click(screen.getByRole('button', {name:/decrement/i}));
    const counter = screen.getByText(/counter -1/i);
    expect(counter).toBeInTheDocument();
  });


});
