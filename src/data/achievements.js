// src/data/achievements.js
import { FaAward, FaGraduationCap, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const achievements = [
  {
    icon: <SiLeetcode />,
    title: '200+ Problems Solved',
    description: 'Solved over 200 coding problems on LeetCode, enhancing problem-solving, algorithms, and data structures skills.'
  },
  
  {
    icon: <FaRocket />,
    title: '4+ Projects',
    description: 'Successfully developed and deployed 3+ production-ready web and mobile applications.'
  },
  
  {
    icon: <FaBrain />,
    title: 'SIH 2023 Semi-Finalist',
    description: 'Selected as a semi-finalist in Smart India Hackathon 2023; worked on AI/ML projects and gained hands-on experience with TensorFlow.'
  },
  {
    icon: <FaAward />,
    title: '50 Days Coding Streak',
    description: 'Maintained a 50-day continuous coding streak on LeetCode, showcasing dedication and consistency.'
  }
];
