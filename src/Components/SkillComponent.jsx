import React from 'react';
import '../Styles/SkillsComponents.css';

const SkillComponent = ({ title, description, icons }) => {
  return (
    <div className="glass-card flex flex-col gap-3 p-3 max-w-lg">
      
      <h1 className="">{title}</h1>
      
      <p className="">{description}</p>
      
      <div className="flex flex-row gap-4">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`${title} icon ${index + 1}`}
            className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
      
    </div>
  );
};

export default SkillComponent;