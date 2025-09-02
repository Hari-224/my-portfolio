// data/projects.js
export const projects = [
  {
    id: 1,
    title: 'Bus Ticket Booking System',
    description:
      'A backend service built with Spring Boot and MySQL for managing bus ticket reservations. It supports full CRUD operations with pagination and sorting, enabling seamless handling of buses, schedules, and reservations.',
    category: 'Backend',
    tech: ['Spring Boot', 'MySQL'],
    features: ['CRUD Operations', 'Pagination', 'Sorting'],
    impact: 'Simplifies ticket management with efficient database operations.',
    github: '#',
    demo: '#',
    image: '/images/projects/bus-booking.jpg',
  },
  {
    id: 2,
    title: 'Suguna Groups Chatbot Application',
    description:
      'An interactive chatbot application developed using Flutter for the frontend and Spring Boot with MySQL for the backend. Designed to handle supplier and customer queries, providing instant responses and improving customer support efficiency.',
    category: 'Full Stack',
    tech: ['Flutter', 'Spring Boot', 'MySQL'],
    features: ['Interactive Chat UI', 'Query Handling', 'Customer Support'],
    impact: 'Improves customer engagement and reduces manual support workload.',
    github: '#',
    demo: '#',
    image: '/images/projects/chatbot.jpg',
  },
  {
    id: 3,
    title: 'Mr. Thamizha Studio Website',
    description:
      'A creative frontend application for a photography and videography studio. The platform provides an engaging showcase of services with immersive designs to attract clients.',
    category: 'Frontend',
    tech: ['React', 'CSS'],
    features: ['Responsive Design', 'Interactive UI', 'Service Showcase'],
    impact: 'Enhanced online presence and improved client interaction.',
    github: '#',
    demo: 'https://mrthamizhastudio.netlify.app/',
    image: '/images/projects/wedding-studio.jpg',
  },
  {
    id: 4,
    title: 'Leave Management System',
    description:
      'A full-stack role-based leave management platform for organizations. Employees can request leaves, managers can approve or reject requests, and admins can oversee the entire system.',
    category: 'Full Stack',
    tech: ['React', 'Spring Boot', 'MySQL'],
    features: ['Role-Based Access', 'Leave Tracking', 'Admin Dashboard'],
    impact: 'Streamlines leave approval processes and reduces administrative overhead.',
    github: '#',
    demo: '#',
    image: '/images/projects/leave-management.jpg',
  },
];

export const PROJECT_FILTERS = ['All', 'Frontend', 'Backend', 'Full Stack'];
