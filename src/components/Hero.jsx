import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typing } from "./Typing";
import { Suspense, useState, useEffect } from "react";
import { useDevice } from '../context/DeviceContext';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useDevice();
  const [shouldRender3D, setShouldRender3D] = useState(true);

  useEffect(() => {
    // Disable 3D on very small screens
    setShouldRender3D(!isMobile || window.innerWidth > 350);

    // Set loading to false after content is likely loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <section className={`relative w-full h-screen mx-auto bg-primary`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Tushar</span>
          </h1>
          <h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
            a passionate&nbsp;       
            <Typing/>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          </p>
        </div>
      </div>

      {shouldRender3D ? (
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xl">Loading 3D Model...</div>
          </div>
        }>
          {!isLoading && <ComputersCanvas />}
        </Suspense>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
          <img 
            src="/desktop_pc/thumbnail.png" 
            alt="3D Model Preview" 
            className="max-w-xs mx-auto"
            style={{ filter: 'grayscale(1)' }}
          />
        </div>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;