import { 
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaCode, FaMobile, FaServer, FaCloud, FaProjectDiagram, FaFigma 
} from 'react-icons/fa';
import { 
  SiFlutter, SiSpringboot, SiMysql, SiAwsamplify, SiJavascript, SiSelenium, SiPostman 
} from 'react-icons/si';

export const skillCategories = [
  {
    category: "Frontend Mastery",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact />, level: 70 },
      { name: "HTML5", icon: <FaHtml5 />, level: 80 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 },
      { name: "UI Design (Figma)", icon: <FaFigma />, level: 65 }
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
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", icon: <SiAwsamplify />, level: 65 }
    ]
  },
  {
    category: "Software Testing",
    icon: <FaProjectDiagram />,
    skills: [
      { name: "Selenium", icon: <SiSelenium />, level: 60 },
      { name: "TestNG", icon: <FaCode />, level: 60 }, // Using generic code icon
      { name: "Hybrid Frameworks", icon: <FaCode />, level: 55 }
    ]
  }
];
