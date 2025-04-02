import { TypeAnimation } from 'react-type-animation';
import { styles } from "../styles";
import { useDevice } from '../context/DeviceContext';

export const Typing = () => {
  const { isMobile } = useDevice();

  //render this only on mobile screens
  if (isMobile) {
    return (
      <span
        className={styles.heroHeadText}
        style={{
          display: 'inline-block',
          color: '#915eff',
          fontSize: '2.5rem',
        }}
      >
        Frontend Developer 🚀
      </span>
    );
  }

  return (
    <TypeAnimation
      className={`${styles.heroHeadText}`}
      sequence={[
        '',
        1000,
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
        color: '#f7f7f7',
        fontSize: '2.5rem',
      }}
      repeat={Infinity}
    />
  );
};