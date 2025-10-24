// src/data/achievements.js
import { FaAward, FaRocket, FaBrain } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const achievements = [
  {
    icon: <SiLeetcode />,
    title: '250+ Problems Solved',
    description: 'Solved over 200 coding problems on LeetCode, enhancing problem-solving, algorithms, and data structures skills.'
  },
  
  {
    icon: <FaRocket />,
    title: '7+ Projects',
    description: 'Successfully developed 4+ production-ready web and mobile applications.'
  },
  
  {
    icon: <FaBrain />,
    title: 'SIH 2024 Semi-Finalist',
    description: 'Smart multilingual museum chatbot enabling all visitors to navigate exhibits and book tickets seamlessly.'
  },
  {
  icon: <FaAward />,
  title: '100 Active Coding Days',
  description: 'Completed 100 total active days of coding on LeetCode, reflecting consistent practice and commitment.'
}

];
