import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../Counter';

describe('Counter Component', () => {
  test('increases count when increment button is clicked', () => {
    render(<Counter />);
    
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    
    // Periksa nilai awal
    expect(countValue).toHaveTextContent('0');
    
    // Klik tombol increment
    fireEvent.click(incrementButton);
    
    // Periksa nilai setelah di-increment
    expect(countValue).toHaveTextContent('1');
  });

  test('decreases count when decrement button is clicked', () => {
    render(<Counter />);
    
    const countValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');
    
    // Periksa nilai awal
    expect(countValue).toHaveTextContent('0');
    
    // Klik tombol decrement
    fireEvent.click(decrementButton);
    
    // Periksa nilai setelah di-decrement
    expect(countValue).toHaveTextContent('-1');
  });
});
