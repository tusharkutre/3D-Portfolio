import React, { useContext } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import "../index.css";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";

import { themeContext } from "../App";

import { SectionWrapper } from "../hoc";

// Defining ServiceCard component
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
    options={{
      max: 45,
      scale: 1.02,
      speed: 400,
    }}
     className="xs:w-full w-full">
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className="w-full  green-pink-gradient p-[3px] rounded-[20px] "
  >
    <div
      className="bg-black hover:p-2 rounded-[20px] overflow-hidden min-h-[280px] flex justify-between items-center flex-col"
    >
      <img
        src={icon}
        alt={title}
        className="w-full h-full cardHover duration-300"
      />
      <h3 className="text-lg text-center font-bold text-white">
        {title}
      </h3>
    </div>
  </motion.div>
</Tilt>
  );
};

const About = () => {

  const theme = useContext(themeContext);

  // console.log(theme);
  
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={`${styles.sectionHeadText} ${theme}`}>Overview.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a software engineer with a passion for building scalable and
          efficient systems. I have a strong background in computer science and
          a keen interest in frontend development. I'm always looking for new
          challenges and opportunities to learn and grow.
        </motion.p>

        <div className="mt-20 gap-10 mx-10 lg:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

      </motion.div>
    </>
  );
};

export default SectionWrapper(About , "about")