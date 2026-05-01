import {React, useEffect, useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import cryptoWatch from '../videos/cryptoWatch.mp4';
import asteroids from '../videos/asteroids.mp4';
import mapBox from '../videos/mapBox.mp4';
import './EmblaCarousel.css';
import speedyBoi from '../images/Speeding.png';
import { motion } from 'framer-motion';


const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const slides = [{ src: asteroids, title: 'Asteroid Game' },
    { src: cryptoWatch, title: 'CryptoWatch' },{src: mapBox, title:'Property Management'}]


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const scaleSlides = useCallback(() => {
  if (!emblaApi) return;

  const scrollProgress = emblaApi.scrollProgress();
  const scrollSnaps = emblaApi.scrollSnapList();

  emblaApi.slideNodes().forEach((slide, index) => {
    const diffToTarget = scrollSnaps[index] - scrollProgress;

    const scale = 1 - Math.abs(diffToTarget) * 0.35;
    const opacity = 1 - Math.abs(diffToTarget) * 0.6;
    const translateY = Math.abs(diffToTarget) * 60;
    const blur = Math.abs(diffToTarget) * 4;

    slide.style.transform = `
      scale(${Math.max(scale, 0.7)})
      translateY(${translateY}px)
    `;
    slide.style.opacity = Math.max(opacity, 0.4);
    slide.style.filter = `blur(${blur}px)`;
  });
}, [emblaApi]);

useEffect(() => {
  if (!emblaApi) return;

  emblaApi.on("scroll", scaleSlides);
  emblaApi.on("reInit", scaleSlides);

  scaleSlides();
}, [emblaApi, scaleSlides]);


  return (
    <div className='videoBg' style={{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${speedyBoi})`}}>
    <motion.div className='emblaCarousel' 
    initial={{opacity:0,scale:0.8,y:120,rotateX:20}}
    whileInView={{opacity: 1,scale: 1,y: 0,rotateX: 0}}
    transition={{duration: 3.0,ease: [0.22, 1, 0.36, 1]}}
    viewport={{ once: true, amount: 0.4 }}>
    <div className="embla" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <motion.div className="embla__slide" key={index}
            initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}>
            <div className = 'title'>{slide.title}</div>
              <video controls width="250"
                     className="embla__slide__img"
                     src={slide.src}
                  />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  )
}

export default EmblaCarousel
