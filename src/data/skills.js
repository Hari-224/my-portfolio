
// data/skills.js
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaCode, FaMobile, FaServer, FaCloud } from 'react-icons/fa';
import { SiFlutter, SiSpringboot, SiMysql, SiAwsamplify, SiJavascript } from 'react-icons/si';

export const skillCategories = [
  {
    category: "Frontend Mastery",
    icon: <FaCode />,
    skills: [
      { name: "React", icon: <FaReact />, level: 70 },
      { name: "HTML5", icon: <FaHtml5 />, level: 80 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 }
    ]
  },
  {
    category: "Backend Excellence",
    icon: <FaServer />,
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "MySQL", icon: <SiMysql />, level: 80 }
    ]
  },
  {
    category: "Mobile Innovation",
    icon: <FaMobile />,
    skills: [
      { name: "Flutter", icon: <SiFlutter />, level: 65 }
    ]
  },
  {
    category: "Cloud",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", icon: <SiAwsamplify />, level: 65 }
    ]
  }
];
