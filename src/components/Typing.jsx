import { TypeAnimation } from 'react-type-animation';
import { styles } from "../styles";
import { useState , useEffect, createContext } from 'react';

export const Typing = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <TypeAnimation
      className={`${styles.heroHeadText}`}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer 🚀',
        1000,
        'UI/UX Designer 📱',
        1000,
        'Full Stack Developer ❤️',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{
        display: 'inline-block',
        color: isMobile ? '#915eff' : '#f7f7f7',
        fontSize: '2.5rem',
      }}
      repeat={Infinity}
    />
  );
};