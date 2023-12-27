import * as React from 'react';
import styles from './Sharepoint.module.scss';
import type { ISharepointProps } from './ISharepointProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { useState } from 'react';


export default class Sharepoint extends React.Component<ISharepointProps, {}> {
  
  
  public render(): React.ReactElement<ISharepointProps> {
    const images = [
      'https://via.placeholder.com/600x300/ff0000/ffffff',
      'https://via.placeholder.com/600x300/00ff00/ffffff',
      'https://via.placeholder.com/600x300/0000ff/ffffff',
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.sharepoint} ${hasTeamsContext ? styles.teams : ''}`}>
            <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={goToPrevSlide}>Prev</button>
      <button onClick={goToNextSlide}>Next</button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
      </section>
    );
  }
}
