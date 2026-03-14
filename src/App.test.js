// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CloudflareWrks title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CloudflareWrks/i);
    expect(titleElement).toBeInTheDocument();
});
