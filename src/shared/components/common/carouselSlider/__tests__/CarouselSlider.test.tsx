import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselSlider, { Slide } from '../CarouselSlider'; // Adjust import path as needed

// Mock data for testing
const mockSlides: Slide[] = [
    {
        name: 'Slide 1',
        description: 'Description for Slide 1',
    },
    {
        name: 'Slide 2',
        icon: 'slide2-icon.png', // Example icon path
        description: 'Description for Slide 2',
    },
];

describe('CarouselSlider Component', () => {
    test('Renders slides with correct content', () => {
        render(<CarouselSlider slides={mockSlides} />);

        // Assert all slides are rendered
        mockSlides.forEach(slide => {
            const slideElement = screen.getByText(slide.name);
            expect(slideElement).toBeInTheDocument();

            if (slide.icon) {
                const iconElement = screen.getByAltText(`${slide.name} Icon`);
                expect(iconElement).toBeInTheDocument();
                expect(iconElement.getAttribute('src')).toBe(slide.icon);
            }

            const descriptionElement = screen.getByText(slide.description);
            expect(descriptionElement).toBeInTheDocument();
        });
    });

    test('Renders slides with empty array', () => {
        render(<CarouselSlider slides={[]} />);
    });

   
    // Additional test cases can be added to cover edge cases, such as empty slides, etc.
});
