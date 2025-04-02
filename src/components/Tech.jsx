import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { useState, useEffect } from 'react';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleTechs, setVisibleTechs] = useState([]);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // On mobile, only show first 6 techs to prevent too many WebGL contexts
    setVisibleTechs(
      isMobile ? technologies.slice(0, 6) : technologies
    );
  }, [isMobile]);

  return (
    <div className='flex flex-row flex-wrap justify-center my-10 gap-10'>
      {/* mapping over each array of items/ele/objects(techs) */}
      {visibleTechs.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={technology.icon} 
                alt={technology.name}
                className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")