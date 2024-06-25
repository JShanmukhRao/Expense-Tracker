import React from 'react';
import styles from './CarouselSlider.module.scss'; // Import SCSS file for styling

export interface Slide {
    name: string;
    icon?: string;
    description: string;
}

export interface CarouselSliderProps {
    slides: Slide[];
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ slides }) => {
    return (
        <div className={styles.carouselSlider}>
            <div className={styles.slidesContainer}>
                {slides?.map(slide => (
                    <div key={slide.name} className={styles.slide}>
                        {slide.icon && <img src={slide.icon} alt={`${slide.name} Icon`} />}
                        <div className={styles.slideContent}>
                            <h3>{slide.name}</h3>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default CarouselSlider;
