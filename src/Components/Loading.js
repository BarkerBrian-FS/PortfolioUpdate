import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../videos/SpinninLogo.json';
import LogoBackground from '../images/LogoBackground.jpg';
import { motion } from 'framer-motion';
import './Loading.css';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    // useEffect(() => {
    //   // Simulate an API call or loading process
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000); 
    // }, []);
    useEffect(() => {
  setTimeout(() => {
    setIsExiting(true); // start exit animation
    setTimeout(() => {
      setIsLoading(false); // remove from DOM AFTER animation
    }, 800); // match animation duration
  }, 2000);
}, []);
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
  //   return (
  //     isLoading && (
  //       <div className="loading" style={style.loadingScreen}>
  //         <Lottie className="lottie-player" options={defaultOptions} style={style.lottieImage}  />
  //       </div>
  //     )
  //   );
  // };

  return (
  isLoading && (
    <motion.div
      className="loading"
      style={style.loadingScreen}
      initial={{
        clipPath: 'circle(150% at 50% 50%)',
        opacity: 1
      }}
      animate={
        isExiting
          ? {
              clipPath: 'circle(0% at 50% 50%)',
              opacity: 0
            }
          : {
              clipPath: 'circle(150% at 50% 50%)',
              opacity: 1
            }
      }
      transition={{
        duration: 0.8,
        ease: 'easeInOut'
      }}
    >
      <Lottie
        className="lottie-player"
        options={defaultOptions}
        style={style.lottieImage}
      />
    </motion.div>
  )
);
}
  
export default LoadingScreen;

const style = {
  loadingScreen:{
     position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  zIndex: 9999,
  },
  backgroundImage: {
    backgroundImage: `url(${LogoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  },
  lottieImage:{
    width: '30rem',
    height: '30rem',
  }

  

}
