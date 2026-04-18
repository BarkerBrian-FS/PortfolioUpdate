import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import cryptoWatch from '../videos/cryptoWatch.mp4';
import asteroids from '../videos/asteroids.mp4';
import mapBox from '../videos/mapBox.mp4';
import './EmblaCarousel.css';
import spaceBgProject from '../images/spaceBgProject.jpg';
import { motion } from 'framer-motion';


const EmblaCarousel = (props) => {
    const options = { loop: false }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const slides = [{ src: asteroids, title: 'Asteroid Game' },
    { src: cryptoWatch, title: 'CryptoWatch' },{src: mapBox, title:'Property Management'}]
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='videoBg' style={{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBgProject})`}}>
      <div className='emblaCarousel' >
        <div className="embla" >
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slides, index) => (
                <div className="embla__slide" key={index}>
                <div className = 'title'>{slides.title}</div>
                  <video controls width="250"
                    className="embla__slide__img"
                    src={slides.src}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="embla__controls">
            <div className="embla__buttons">
              <motion.div
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.9 }}
              className='prevButton'>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.9 }}>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel

