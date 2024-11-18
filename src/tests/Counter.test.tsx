import { render, fireEvent, screen } from '@testing-library/react';
import {act} from 'react';

import Counter from "../components/Counter";

describe('Counter component', () => {
    it('should increment the count when the Increment button is clicked', async () => {
        await act(async () => {
            render(<Counter initialValue={10} />);
        });

        const currentCount = screen.getByText('Current Count: 10');
        expect(currentCount).toBeInTheDocument();

        const incrementButton = screen.getByText('Increment');
        await act(async () => {
            fireEvent.click(incrementButton);
        });

        expect(screen.getByText('Current Count: 11')).toBeInTheDocument();
    });

    it('should decrement the count when the Decrement button is clicked', async () => {
        await act(async () => {
            render(<Counter initialValue={10} />);
        });

        const currentCount = screen.getByText('Current Count: 10');
        expect(currentCount).toBeInTheDocument();

        const decrementButton = screen.getByText('Decrement');
        await act(async () => {
            fireEvent.click(decrementButton);
        });

        expect(screen.getByText('Current Count: 9')).toBeInTheDocument();
    });

    it('should randomize the count when the Randomize button is clicked', async () => {
        await act(async () => {
            render(<Counter initialValue={10} />);
        });

        const currentCount = screen.getByText('Current Count: 10');
        expect(currentCount).toBeInTheDocument();

        const randomizeButton = screen.getByText('Randomize');
        await act(async () => {
            fireEvent.click(randomizeButton);
        });

        const newCount = screen.getByText(/Current Count: \d+/);
        expect(newCount).toBeInTheDocument();
        expect(newCount).not.toHaveTextContent('Current Count: 10');
    });
});
