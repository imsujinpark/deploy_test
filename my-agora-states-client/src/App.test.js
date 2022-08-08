import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component Tester", () => {
    it('renders `my agora states`', () => {
        render(<App />);
        const linkElement = screen.getByText(/my agora states/i);
        expect(linkElement).toBeInTheDocument();
    });

});