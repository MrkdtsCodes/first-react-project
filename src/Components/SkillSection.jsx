import javascriptIcon from '../assets/techStack_icons/Javascript.png';
import reactIcon from '../assets/techStack_icons/react.png';
import tailwind from '../assets/techStack_icons/tailwind.png';
import SkillComponent from './SkillComponent';

function SkillsSection() {
  return ( 
    <div className='border border-red-500 p-4 flex flex-col gap-4 '>
      <h2>My Skills</h2>
      
      {/* Single card example */}
      <SkillComponent 
        
        title="FrontEnd"
        description="Building interactive user interfaces with React"
        icons={[
            reactIcon,javascriptIcon,tailwind  
        ]}
      />
      
      {/* Add more cards 
      <SkillComponent 
        title="Frontend"
        description="Writing clean and efficient JavaScript code"
        icons={['📜', '⚡', '🔥']}
      />*/}
    </div>
  );
}

export default SkillsSection;