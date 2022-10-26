import React from 'react';
import './carousel.css';

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <div className='slider'>

        <div className='slide-track'>

          <div className='slide'>
            <img src={require('../../assets/carousel1.png')} className='carousel1-img' />
          </div>

          <div className='slide'>
            <img src={require('../../assets/carousel1.png')} className='carousel1-img' />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Carousel