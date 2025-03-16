import React from 'react'
import styles from './Slides.module.css';

const Slides = ({ slides, contentRef, posicao }) => {
    

  return (
    <div 
        
        className={styles.mainSlideDiv}
    >
        {
            slides.map(slide => (
                <div 
                    key={slide.id} 
                    className={styles.slideDiv}
                    ref={contentRef}
                    style={{ transform: `translateX(${posicao}px)` }}
                >
                    {slide.text}
                </div>
            ))
        }
    </div>
  )
}

export default Slides
