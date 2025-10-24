export const projects = [
  {
    id: 1,
    title: 'Suguna Groups Chatbot (Internship Project)',
    description:
      'A supplier-assistance chatbot built with Flutter and Spring Boot, using MySQL for data management. Handles real-time supplier queries with automated responses, featuring a responsive chat UI, FAQ management, and query prioritization to improve support efficiency.',
    category: 'Full Stack',
    tech: ['Flutter', 'Spring Boot', 'MySQL'],
    features: ['Interactive Chat UI', 'Query Automation', 'FAQ Management'],
    impact:
      'Enhanced supplier support by automating queries, reducing response time, and demonstrating practical full-stack development skills.',
    github: '#',
    demo: '#',
    image: '/images/projects/chatbot.jpg',
  },

  {
    id: 2,
    title: 'JWT + SCrypt Authentication System',
    description:
      'A secure authentication system built with Flutter and Spring Boot. Implements JWT for stateless authentication and SCrypt for advanced password encryption. Supports real-time user registration, login, and secure data retrieval from MySQL.',
    category: 'Full Stack',
    tech: ['Flutter', 'Spring Boot', 'MySQL', 'JWT', 'SCrypt'],
    features: ['JWT Auth', 'SCrypt Encryption', 'Secure Login Flow', 'Real-Time Validation'],
    impact:
      'Highlights expertise in implementing secure full-stack authentication workflows with industry-standard encryption.',
    github: '#',
    demo: '#',
    image: '/images/projects/jwt-scrypt-auth.jpg',
  },

  {
    id: 3,
    title: 'Secure Chat Application',
    description:
      'Real-time chat application using React, Spring Boot, MySQL, and WebSocket. Features PIN-based message encryption, message decode/encode toggle, read/unread indicators, and a responsive UI for seamless communication.',
    category: 'Full Stack',
    tech: ['React', 'Spring Boot', 'MySQL', 'WebSocket'],
    features: ['PIN Encryption', 'Decode/Encode Toggle', 'Live Chat Updates', 'Responsive UI'],
    impact:
      'Enables secure, private, and real-time messaging with an intuitive user experience.',
    github: '#',
    demo: '#',
    image: '/images/projects/secure-chat.jpg',
  },

  {
    id: 4,
    title: 'Attendance Tracker',
    description:
      'Web platform for students, teachers, and admins to manage attendance and performance. Real-time updates and JWT-based security ensure reliability and transparency.',
    category: 'Full Stack',
    tech: ['React', 'Spring Boot', 'MySQL'],
    features: ['Real-Time Updates', 'Role-Based Access', 'Performance Scoring', 'JWT Security'],
    impact:
      'Ensures accuracy and transparency in attendance management across user roles.',
    github: '#',
    demo: '#',
    image: '/images/projects/attendance-tracker.jpg',
  },

  {
    id: 5,
    title: 'Leave Management System',
    description:
      'Full-stack platform for employees to request leaves, managers to approve/reject, and admins to monitor the workflow.',
    category: 'Full Stack',
    tech: ['React', 'Spring Boot', 'MySQL'],
    features: ['Role-Based Access', 'Leave Requests', 'Admin Dashboard'],
    impact:
      'Improves leave processing efficiency and transparency within organizations.',
    github: '#',
    demo: '#',
    image: '/images/projects/leave-management.jpg',
  },

  {
    id: 6,
    title: 'Bus Ticket Booking System',
    description:
      'Backend service with Spring Boot and MySQL to manage bus ticket reservations with CRUD operations, pagination, and sorting.',
    category: 'Backend',
    tech: ['Spring Boot', 'MySQL'],
    features: ['CRUD Operations', 'Pagination', 'Sorting'],
    impact:
      'Streamlines bus reservation management and improves operational efficiency.',
    github: '#',
    demo: '#',
    image: '/images/projects/bus-booking.jpg',
  },

  {
    id: 7,
    title: 'Mr. Thamizha Studio Website',
    description:
      'Responsive React website for a photography studio including portfolio showcase and interactive service pages.',
    category: 'Frontend',
    tech: ['React', 'CSS'],
    features: ['Responsive Design', 'Interactive UI', 'Service Showcase'],
    impact:
      'Enhanced client engagement and improved online presence for the studio.',
    github: '#',
    demo: 'https://mrthamizhastudio.netlify.app/',
    image: '/images/projects/wedding-studio.jpg',
  },
];

export const PROJECT_FILTERS = ['All', 'Frontend', 'Backend', 'Full Stack'];
