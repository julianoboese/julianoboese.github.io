import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
  const { theme } = useContext(ThemeContext);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {testimonialsData.length > 0 && (
        <div
          className="testimonials"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="testimonials--header">
            <h1 style={{ color: theme.secondary }}>Testimonials</h1>
          </div>
          <div className="testimonials--body">
            <FormatQuoteRoundedIcon
              className="quote"
              sx={{ color: theme.secondary, fontSize: { xs: '3rem', md: '3.5rem', lg: '8rem' } }}
            />
            <div
              className="testimonials--slider"
              style={{ backgroundColor: theme.primary }}
            >
              <Slider {...settings} ref={sliderRef}>
                {testimonialsData.map((test) => (
                  <div
                    className="single--testimony"
                    key={test.id}
                  >
                    <div className="testimonials--container">
                      <div
                        className="review--img"
                        style={{
                          backgroundColor:
                                                        theme.secondary,
                        }}
                      >
                        <img
                          src={test.image}
                          alt={test.name}
                        />
                      </div>
                      <div
                        className="review--content"
                        style={{
                          backgroundColor:
                                                        theme.secondary,
                          color: theme.tertiary,
                        }}
                      >
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <button
                className="prevBtn"
                onClick={gotoPrev}
                style={{ backgroundColor: theme.secondary }}
                type="button"
              >
                <ArrowBackRoundedIcon
                  style={{ color: theme.primary, fontSize: '2.5rem' }}
                  aria-label="Previous testimonial"
                />
              </button>
              <button
                className="nextBtn"
                onClick={gotoNext}
                style={{ backgroundColor: theme.secondary }}
                type="button"
              >
                <ArrowForwardRoundedIcon
                  style={{ color: theme.primary, fontSize: '2.5rem' }}
                  aria-label="Next testimonial"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
