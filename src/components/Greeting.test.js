import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from '../components/Greeting';

describe('Greeting Component', () => {
  test('renders an empty greeting message when no name is provided', () => {
    render(<Greeting />); // Tidak memberikan props `name`
    const greetingMessage = screen.getByTestId('greeting-message');
    expect(greetingMessage).toHaveTextContent('Hello,');  // Memastikan hanya "Hello,"
  });

  test('renders the correct greeting when name is provided', () => {
    render(<Greeting name="John" />);
    const greetingMessage = screen.getByTestId('greeting-message');
    expect(greetingMessage).toHaveTextContent('Hello, John');
  });

  test('renders the correct greeting when name is an empty string', () => {
    render(<Greeting name="" />);
    const greetingMessage = screen.getByTestId('greeting-message');
    expect(greetingMessage).toHaveTextContent('Hello,');  // Memastikan "Hello," tanpa nama
  });
});
