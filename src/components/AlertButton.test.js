import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertButton from '../components/AlertButton';

describe('AlertButton Component', () => {
  test('shows alert when button is clicked', () => {
    // Mock fungsi alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<AlertButton />);

    const button = screen.getByTestId('alert-button');
    
    // Simulasi klik tombol
    fireEvent.click(button);
    
    // Periksa apakah alert dipanggil
    expect(window.alert).toHaveBeenCalledWith('Button clicked!');
    
    // Hapus mock setelah pengujian selesai
    window.alert.mockRestore();
  });
});
