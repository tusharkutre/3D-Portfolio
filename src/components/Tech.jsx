import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center my-10 gap-10'>
      {/* mapping over each array of items/ele/objects(techs) */}
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")