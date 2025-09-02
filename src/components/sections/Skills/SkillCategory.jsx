// import React from 'react';
// import SkillItem from './SkillItem';

// const SkillCategory = ({ category, icon, skills }) => {
//   return (
//     <div className="skill-category glass-card">
//       <div className="skill-category-header">
//         <span className="skill-category-icon">{icon}</span>
//         <h3 className="skill-category-title">{category}</h3>
//       </div>
      
//       <div className="skills-list">
//         {skills.map((skill, index) => (
//           <SkillItem
//             key={index}
//             name={skill.name}
//             icon={skill.icon}
//             level={skill.level}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillCategory;

import React from 'react';
import SkillItem from './SkillItem';

const SkillCategory = ({ category, icon, skills }) => {
  return (
    <div className="skill-category glass-card">
      <div className="skill-category-header">
        <span className="skill-category-icon">{icon}</span>
        <h3 className="skill-category-title">{category}</h3>
      </div>
      
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
