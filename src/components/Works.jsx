import React from "react";
import { Tilt } from "react-tilt";
import { motion , reverseEasing, useScroll  } from "framer-motion";
// normal import statments would say
import { styles } from "../styles";
import { github } from "../assets";
import { rocket } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "../index.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="inset-0 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 backdrop-blur-md hover:border-4 hover:border-white p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[15px] ">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tilt
              key={`${name}-${tag.name}`}
              className={`text-[14px] rounded-xl border-white ${tag.border}  ${tag.color}`}
            >
              {tag.name}
            </Tilt>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  return (
    <>
      <div className="top-0 p-5 relative">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="flex  items-center justify-between lg:flex-row flex-col">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
          <motion.div
  className="lg:right-40 absolute hidden lg:block"
  initial={{ y: 200, scale: 1.5 }} // initial position and scale
  animate={{
    y: [ -100 , 0 , -100], // animate y from 200 to 0 and back to 200
  }}
  transition={{
    duration: 5, // duration of one cycle
    repeat : Infinity,
    ease: 'easeInOut', // easing function
  }}
>
  <img width={100} src={rocket} alt="" />
</motion.div>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
