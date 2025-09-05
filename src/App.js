// // import React, { useState, useEffect, useRef } from 'react';
// // import { 
// //   FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaPython,
// //   FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaExternalLinkAlt,
// //   FaCode, FaMobile, FaServer, FaDatabase, FaCloud, FaBrain,
// //   FaRocket, FaLightbulb, FaGraduationCap, FaAward, FaStar,
// //   FaDownload, FaEye, FaHeart, FaPlay, FaPause, FaBars, FaTimes
// // } from 'react-icons/fa';
// // import { 
// //   SiFlutter, SiSpringboot, SiMysql, SiAwsamplify, SiCplusplus, 
// //   SiJavascript, SiLeetcode, SiTypescript, SiDocker, SiKubernetes
// // } from 'react-icons/si';
// // const PremiumPortfolio = () => {
// //   const [activeSection, setActiveSection] = useState('hero');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const [projectFilter, setProjectFilter] = useState('All');
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitStatus, setSubmitStatus] = useState('');
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   // Track scroll progress
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const totalScroll = document.documentElement.scrollTop;
// //       const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// //       const scroll = `${totalScroll / windowHeight}`;
// //       setScrollProgress(scroll);
// //       // Update active section based on scroll position
// //       const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
// //       const scrollPos = window.scrollY + 200;

// //       sections.forEach((section) => {
// //         const element = document.getElementById(section);
// //         if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
// //           setActiveSection(section);
// //         }
// //       });
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);
// //   // Mouse tracking for cursor effect
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);
// //   const scrollToSection = (sectionId) => {
// //     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
// //     setIsMenuOpen(false);
// //   };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     // Simulate form submission
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     setSubmitStatus('success');
// //     setFormData({ name: '', email: '', message: '' });
// //     setIsSubmitting(false);
// //     setTimeout(() => setSubmitStatus(''), 3000);
// //   };
// //   // Enhanced project data
// //   const projects = [
// //     {
// //       title: 'AI-Powered Bus Booking System',
// //       description: 'Revolutionary backend API with ML-based route optimization and real-time seat availability prediction using Spring Boot microservices architecture.',
// //       category: 'Backend',
// //       tech: ['Spring Boot', 'MySQL', 'Redis', 'Docker', 'AWS'],
// //       features: ['Real-time Analytics', 'ML Route Optimization', 'Microservices'],
// //       impact: '40% faster booking, 99.9% uptime',
// //       github: '#',
// //       demo: '#'
// //     },
// //     {
// //       title: 'Suguna Groups Smart Chatbot',
// //       description: 'Enterprise-grade conversational AI with NLP capabilities, handling 10k+ daily queries with 95% accuracy rate.',
// //       category: 'Full Stack',
// //       tech: ['Flutter', 'Spring Boot', 'MySQL', 'TensorFlow', 'GCP'],
// //       features: ['NLP Processing', 'Multi-language Support', 'Analytics Dashboard'],
// //       impact: '70% query resolution, 24/7 availability',
// //       github: '#',
// //       demo: '#'
// //     },
// //     {
// //       title: 'Mr. Thamizha Studio Experience',
// //       description: 'Immersive wedding planning platform with 3D venue tours, real-time event coordination, and AR photo previews.',
// //       category: 'Frontend',
// //       tech: ['React', 'Three.js', 'WebRTC', 'Firebase'],
// //       features: ['3D Visualization', 'AR Integration', 'Real-time Collaboration'],
// //       impact: '300% client engagement increase',
// //       github: '#',
// //       demo: 'https://mrthamizhastudio.netlify.app/'
// //     },
// //     {
// //       title: 'Enterprise Leave Management Pro',
// //       description: 'Scalable workforce management system with predictive analytics, automated workflows, and executive dashboards.',
// //       category: 'Full Stack',
// //       tech: ['React', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker'],
// //       features: ['Predictive Analytics', 'Workflow Automation', 'Executive Dashboard'],
// //       impact: '60% admin time savings, 95% user satisfaction',
// //       github: '#',
// //       demo: '#'
// //     }
// //   ];
// //   // Skills data with proficiency levels
// //   const skillCategories = [
// //     {
// //       category: "Frontend Mastery",
// //       icon: <FaCode />,
// //       skills: [
// //         { name: "React", icon: <FaReact />, level: 95 },
// //         { name: "HTML5", icon: <FaHtml5 />, level: 98 },
// //         { name: "CSS3", icon: <FaCss3Alt />, level: 92 },
// //         { name: "JavaScript", icon: <SiJavascript />, level: 88 },
// //         { name: "TypeScript", icon: <SiTypescript />, level: 78 }
// //       ]
// //     },
// //     {
// //       category: "Backend Excellence",
// //       icon: <FaServer />,
// //       skills: [
// //         { name: "Spring Boot", icon: <SiSpringboot />, level: 90 },
// //         { name: "Java", icon: <FaJava />, level: 93 },
// //         { name: "MySQL", icon: <SiMysql />, level: 85 },
// //         { name: "Docker", icon: <SiDocker />, level: 75 }
// //       ]
// //     },
// //     {
// //       category: "Mobile Innovation",
// //       icon: <FaMobile />,
// //       skills: [
// //         { name: "Flutter", icon: <SiFlutter />, level: 80 },
// //         { name: "React Native", icon: <FaReact />, level: 72 }
// //       ]
// //     },
// //     {
// //       category: "Cloud & DevOps",
// //       icon: <FaCloud />,
// //       skills: [
// //         { name: "AWS", icon: <SiAwsamplify />, level: 82 },
// //         { name: "Kubernetes", icon: <SiKubernetes />, level: 68 }
// //       ]
// //     }
// //   ];
// //   const achievements = [
// //     { icon: <FaAward />, title: "Top 5% on LeetCode", description: "500+ problems solved" },
// //     { icon: <FaGraduationCap />, title: "B.E. Computer Science", description: "SKCT, Expected 2027" },
// //     { icon: <FaRocket />, title: "3+ Live Projects", description: "Production deployments" },
// //     { icon: <FaBrain />, title: "AI/ML Enthusiast", description: "TensorFlow certified" }
// //   ];
// //   const filteredProjects = projectFilter === 'All' 
// //     ? projects 
// //     : projects.filter(p => p.category === projectFilter);
// //   const styles = {
// //     // Base styles
// //     container: {
// //       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
// //       background: 'linear-gradient(135deg, #0c0c1d 0%, #1a1a2e 50%, #16213e 100%)',
// //       color: '#ffffff',
// //       minHeight: '100vh',
// //       overflow: 'hidden'
// //     },
// //     // Animated background
// //     animatedBg: {
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       bottom: 0,
// //       zIndex: 0,
// //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //       opacity: 0.1
// //     },
// //     floatingOrb1: {
// //       position: 'absolute',
// //       top: '10%',
// //       left: '10%',
// //       width: '300px',
// //       height: '300px',
// //       background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
// //       borderRadius: '50%',
// //       animation: 'float 6s ease-in-out infinite'
// //     },
// //     floatingOrb2: {
// //       position: 'absolute',
// //       top: '60%',
// //       right: '10%',
// //       width: '200px',
// //       height: '200px',
// //       background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
// //       borderRadius: '50%',
// //       animation: 'float 8s ease-in-out infinite reverse'
// //     },
// //     floatingOrb3: {
// //       position: 'absolute',
// //       bottom: '20%',
// //       left: '50%',
// //       width: '250px',
// //       height: '250px',
// //       background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
// //       borderRadius: '50%',
// //       animation: 'float 7s ease-in-out infinite'
// //     },
// //     // Navigation
// //     navbar: {
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       zIndex: 1000,
// //       background: 'rgba(0, 0, 0, 0.2)',
// //       backdropFilter: 'blur(20px)',
// //       borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
// //       padding: '1rem 2rem',
// //       transition: 'all 0.3s ease'
// //     },
// //     navContent: {
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       maxWidth: '1200px',
// //       margin: '0 auto'
// //     },
// //     logo: {
// //       fontSize: '1.5rem',
// //       fontWeight: 'bold',
// //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //       WebkitBackgroundClip: 'text',
// //       WebkitTextFillColor: 'transparent',
// //       cursor: 'pointer',
// //       transition: 'transform 0.3s ease'
// //     },
// //     navLinks: {
// //       display: 'flex',
// //       gap: '2rem',
// //       listStyle: 'none',
// //       margin: 0,
// //       padding: 0
// //     },
// //     navLink: {
// //       color: '#rgb(156, 163, 175)',
// //       textDecoration: 'none',
// //       padding: '0.5rem 1rem',
// //       borderRadius: '0.5rem',
// //       transition: 'all 0.3s ease',
// //       cursor: 'pointer',
// //       border: 'none',
// //       background: 'transparent',
// //       fontSize: '1rem'
// //     },
// //     navLinkActive: {
// //       color: '#8b5cf6',
// //       background: 'rgba(139, 92, 246, 0.1)'
// //     },
// //     mobileMenuButton: {
// //       display: 'none',
// //       background: 'transparent',
// //       border: 'none',
// //       color: '#ffffff',
// //       fontSize: '1.5rem',
// //       cursor: 'pointer'
// //     },
// //     // Hero section
// //     heroSection: {
// //       minHeight: '100vh',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       textAlign: 'center',
// //       padding: '2rem',
// //       position: 'relative',
// //       zIndex: 1
// //     },
// //     heroContent: {
// //       maxWidth: '800px',
// //       animation: 'fadeInUp 1s ease-out'
// //     },
// //     heroTitle: {
// //       fontSize: 'clamp(3rem, 8vw, 6rem)',
// //       fontWeight: 'bold',
// //       marginBottom: '2rem',
// //       background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
// //       WebkitBackgroundClip: 'text',
// //       WebkitTextFillColor: 'transparent',
// //       lineHeight: 1.1
// //     },
// //     heroSubtitle: {
// //       fontSize: 'clamp(1.2rem, 3vw, 2rem)',
// //       color: '#d1d5db',
// //       marginBottom: '2rem',
// //       opacity: 0.9
// //     },
// //     heroButtons: {
// //       display: 'flex',
// //       gap: '1rem',
// //       justifyContent: 'center',
// //       flexWrap: 'wrap',
// //       marginBottom: '3rem'
// //     },
// //     primaryButton: {
// //       padding: '1rem 2rem',
// //       background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
// //       border: 'none',
// //       borderRadius: '2rem',
// //       color: '#ffffff',
// //       fontWeight: 'bold',
// //       fontSize: '1rem',
// //       cursor: 'pointer',
// //       transition: 'all 0.3s ease',
// //       boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
// //     },
// //     secondaryButton: {
// //       padding: '1rem 2rem',
// //       background: 'transparent',
// //       border: '2px solid #8b5cf6',
// //       borderRadius: '2rem',
// //       color: '#8b5cf6',
// //       fontWeight: 'bold',
// //       fontSize: '1rem',
// //       cursor: 'pointer',
// //       transition: 'all 0.3s ease'
// //     },
// //     socialLinks: {
// //       display: 'flex',
// //       gap: '2rem',
// //       justifyContent: 'center',
// //       fontSize: '2rem'
// //     },
// //     socialLink: {
// //       color: '#9ca3af',
// //       transition: 'all 0.3s ease',
// //       cursor: 'pointer'
// //     },
// //     // Section styles
// //     section: {
// //       padding: '6rem 2rem',
// //       position: 'relative',
// //       zIndex: 1
// //     },
// //     sectionTitle: {
// //       fontSize: 'clamp(2.5rem, 5vw, 4rem)',
// //       fontWeight: 'bold',
// //       textAlign: 'center',
// //       marginBottom: '3rem',
// //       background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
// //       WebkitBackgroundClip: 'text',
// //       WebkitTextFillColor: 'transparent'
// //     },
// //     // About section
// //     aboutGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //       gap: '3rem',
// //       maxWidth: '1200px',
// //       margin: '0 auto',
// //       alignItems: 'center'
// //     },
// //     aboutContent: {
// //       fontSize: '1.125rem',
// //       lineHeight: 1.8,
// //       color: '#d1d5db'
// //     },
// //     achievementsGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '1.5rem'
// //     },
// //     achievementCard: {
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       backdropFilter: 'blur(20px)',
// //       border: '1px solid rgba(255, 255, 255, 0.1)',
// //       borderRadius: '1rem',
// //       padding: '2rem',
// //       textAlign: 'center',
// //       transition: 'transform 0.3s ease'
// //     },
// //     achievementIcon: {
// //       fontSize: '3rem',
// //       color: '#8b5cf6',
// //       marginBottom: '1rem'
// //     },
// //     // Skills section
// //     skillsGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
// //       gap: '2rem',
// //       maxWidth: '1200px',
// //       margin: '0 auto'
// //     },
// //     skillCategory: {
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       backdropFilter: 'blur(20px)',
// //       border: '1px solid rgba(255, 255, 255, 0.1)',
// //       borderRadius: '1rem',
// //       padding: '2rem'
// //     },
// //     skillCategoryHeader: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       marginBottom: '2rem',
// //       fontSize: '1.25rem',
// //       fontWeight: 'bold'
// //     },
// //     skillCategoryIcon: {
// //       fontSize: '1.5rem',
// //       color: '#8b5cf6',
// //       marginRight: '1rem'
// //     },
// //     skillItem: {
// //       marginBottom: '1.5rem'
// //     },
// //     skillHeader: {
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       marginBottom: '0.5rem'
// //     },
// //     skillName: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       fontSize: '0.9rem',
// //       fontWeight: '500'
// //     },
// //     skillIcon: {
// //       marginRight: '0.5rem',
// //       fontSize: '1.2rem',
// //       color: '#60a5fa'
// //     },
// //     progressBar: {
// //       width: '100%',
// //       height: '0.5rem',
// //       background: 'rgba(255, 255, 255, 0.1)',
// //       borderRadius: '0.25rem',
// //       overflow: 'hidden'
// //     },
// //     progressFill: {
// //       height: '100%',
// //       background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
// //       borderRadius: '0.25rem',
// //       transition: 'width 1s ease-out'
// //     },
// //     // Projects section
// //     filterButtons: {
// //       display: 'flex',
// //       justifyContent: 'center',
// //       gap: '1rem',
// //       marginBottom: '3rem',
// //       flexWrap: 'wrap'
// //     },
// //     filterButton: {
// //       padding: '0.75rem 1.5rem',
// //       border: '2px solid #8b5cf6',
// //       borderRadius: '2rem',
// //       background: 'transparent',
// //       color: '#8b5cf6',
// //       cursor: 'pointer',
// //       transition: 'all 0.3s ease',
// //       fontSize: '0.9rem',
// //       fontWeight: '500'
// //     },
// //     filterButtonActive: {
// //       background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
// //       color: '#ffffff',
// //       border: '2px solid transparent'
// //     },
// //     projectsGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
// //       gap: '2rem',
// //       maxWidth: '1200px',
// //       margin: '0 auto'
// //     },
// //     projectCard: {
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       backdropFilter: 'blur(20px)',
// //       border: '1px solid rgba(255, 255, 255, 0.1)',
// //       borderRadius: '1rem',
// //       overflow: 'hidden',
// //       transition: 'transform 0.3s ease',
// //       cursor: 'pointer'
// //     },
// //     projectGradient: {
// //       height: '0.25rem',
// //       background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)'
// //     },
// //     projectContent: {
// //       padding: '2rem'
// //     },
// //     projectHeader: {
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'flex-start',
// //       marginBottom: '1rem'
// //     },
// //     projectTitle: {
// //       fontSize: '1.25rem',
// //       fontWeight: 'bold',
// //       color: '#ffffff',
// //       marginBottom: '0.5rem'
// //     },
// //     projectCategory: {
// //       background: 'rgba(139, 92, 246, 0.2)',
// //       color: '#8b5cf6',
// //       padding: '0.25rem 0.75rem',
// //       borderRadius: '1rem',
// //       fontSize: '0.75rem',
// //       fontWeight: '500'
// //     },
// //     projectDescription: {
// //       color: '#d1d5db',
// //       lineHeight: 1.6,
// //       marginBottom: '1.5rem'
// //     },
// //     projectSection: {
// //       marginBottom: '1rem'
// //     },
// //     projectSectionTitle: {
// //       fontSize: '0.875rem',
// //       fontWeight: 'bold',
// //       color: '#8b5cf6',
// //       marginBottom: '0.5rem'
// //     },
// //     featureTags: {
// //       display: 'flex',
// //       flexWrap: 'wrap',
// //       gap: '0.5rem'
// //     },
// //     featureTag: {
// //       background: 'rgba(59, 130, 246, 0.2)',
// //       color: '#60a5fa',
// //       padding: '0.25rem 0.5rem',
// //       borderRadius: '0.5rem',
// //       fontSize: '0.75rem'
// //     },
// //     impactText: {
// //       color: '#10b981',
// //       fontWeight: '500',
// //       fontSize: '0.875rem'
// //     },
// //     techTags: {
// //       display: 'flex',
// //       flexWrap: 'wrap',
// //       gap: '0.5rem'
// //     },
// //     techTag: {
// //       background: 'rgba(75, 85, 99, 0.5)',
// //       color: '#d1d5db',
// //       padding: '0.25rem 0.5rem',
// //       borderRadius: '0.5rem',
// //       fontSize: '0.75rem'
// //     },
// //     projectLinks: {
// //       display: 'flex',
// //       gap: '1rem',
// //       paddingTop: '1rem',
// //       borderTop: '1px solid rgba(255, 255, 255, 0.1)'
// //     },
// //     projectLink: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '0.5rem',
// //       color: '#9ca3af',
// //       textDecoration: 'none',
// //       transition: 'color 0.3s ease',
// //       fontSize: '0.875rem'
// //     },
// //     // Contact section
// //     contactGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
// //       gap: '3rem',
// //       maxWidth: '1000px',
// //       margin: '0 auto'
// //     },
// //     contactForm: {
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       backdropFilter: 'blur(20px)',
// //       border: '1px solid rgba(255, 255, 255, 0.1)',
// //       borderRadius: '1rem',
// //       padding: '2rem'
// //     },
// //     formGroup: {
// //       marginBottom: '1.5rem'
// //     },
// //     label: {
// //       display: 'block',
// //       color: '#d1d5db',
// //       fontSize: '0.875rem',
// //       fontWeight: '500',
// //       marginBottom: '0.5rem'
// //     },
// //     input: {
// //       width: '100%',
// //       padding: '0.75rem',
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       border: '1px solid rgba(255, 255, 255, 0.2)',
// //       borderRadius: '0.5rem',
// //       color: '#ffffff',
// //       fontSize: '1rem',
// //       transition: 'border-color 0.3s ease'
// //     },
// //     textarea: {
// //       width: '100%',
// //       padding: '0.75rem',
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       border: '1px solid rgba(255, 255, 255, 0.2)',
// //       borderRadius: '0.5rem',
// //       color: '#ffffff',
// //       fontSize: '1rem',
// //       resize: 'vertical',
// //       minHeight: '120px',
// //       transition: 'border-color 0.3s ease'
// //     },
// //     submitButton: {
// //       width: '100%',
// //       padding: '0.75rem',
// //       background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
// //       border: 'none',
// //       borderRadius: '0.5rem',
// //       color: '#ffffff',
// //       fontSize: '1rem',
// //       fontWeight: 'bold',
// //       cursor: 'pointer',
// //       transition: 'transform 0.3s ease'
// //     },
// //     contactInfo: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '1.5rem'
// //     },
// //     contactCard: {
// //       background: 'rgba(255, 255, 255, 0.05)',
// //       border: '1px solid rgba(255, 255, 255, 0.1)',
// //       borderRadius: '0.75rem',
// //       padding: '1.5rem',
// //       display: 'flex',
// //       alignItems: 'center',
// //       textDecoration: 'none',
// //       color: 'inherit',
// //       transition: 'all 0.3s ease'
// //     },
// //     contactIcon: {
// //       fontSize: '2rem',
// //       color: '#8b5cf6',
// //       marginRight: '1rem'
// //     },
// //     statusIndicator: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '0.75rem',
// //       marginTop: '2rem'
// //     },
// //     statusDot: {
// //       width: '12px',
// //       height: '12px',
// //       background: '#10b981',
// //       borderRadius: '50%',
// //       animation: 'pulse 2s infinite'
// //     },
// //     // Footer
// //     footer: {
// //       borderTop: '1px solid rgba(255, 255, 255, 0.1)',
// //       padding: '3rem 2rem',
// //       textAlign: 'center'
// //     },
// //     footerContent: {
// //       maxWidth: '1200px',
// //       margin: '0 auto'
// //     },
// //     footerGrid: {
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       flexWrap: 'wrap',
// //       gap: '2rem',
// //       marginBottom: '2rem'
// //     },
// //     // Utility components
// //     scrollToTop: {
// //       position: 'fixed',
// //       bottom: '2rem',
// //       right: '2rem',
// //       width: '50px',
// //       height: '50px',
// //       borderRadius: '50%',
// //       background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
// //       border: 'none',
// //       color: '#ffffff',
// //       fontSize: '1.25rem',
// //       cursor: 'pointer',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       zIndex: 1000,
// //       transition: 'transform 0.3s ease',
// //       boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
// //     },
// //     progressBar2: {
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       height: '4px',
// //       background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
// //       zIndex: 1001,
// //       transformOrigin: 'left',
// //       transition: 'transform 0.1s ease'
// //     },
// //     cursor: {
// //       position: 'fixed',
// //       width: '20px',
// //       height: '20px',
// //       background: 'rgba(139, 92, 246, 0.6)',
// //       borderRadius: '50%',
// //       pointerEvents: 'none',
// //       zIndex: 9999,
// //       mixBlendMode: 'difference',
// //       transition: 'transform 0.1s ease'
// //     },
// //     // Mobile menu
// //     mobileMenu: {
// //       position: 'fixed',
// //       top: 0,
// //       right: isMenuOpen ? 0 : '-100%',
// //       width: '100%',
// //       height: '100vh',
// //       background: 'rgba(0, 0, 0, 0.95)',
// //       backdropFilter: 'blur(20px)',
// //       zIndex: 999,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       gap: '2rem',
// //       transition: 'right 0.3s ease'
// //     },
// //     mobileMenuItem: {
// //       color: '#ffffff',
// //       fontSize: '2rem',
// //       fontWeight: 'bold',
// //       cursor: 'pointer',
// //       transition: 'color 0.3s ease'
// //     },
// //     // Responsive styles
// //     '@media (max-width: 768px)': {
// //       mobileMenuButton: {
// //         display: 'block'
// //       },
// //       navLinks: {
// //         display: 'none'
// //       },
// //       heroTitle: {
// //         fontSize: '3rem'
// //       },
// //       section: {
// //         padding: '4rem 1rem'
// //       },
// //       projectsGrid: {
// //         gridTemplateColumns: '1fr'
// //       },
// //       contactGrid: {
// //         gridTemplateColumns: '1fr'
// //       },
// //       achievementsGrid: {
// //         gridTemplateColumns: '1fr'
// //       }
// //     }
// //   };
// //   // CSS animations
// //   const keyframes = `
// //     @keyframes fadeInUp {
// //       from {
// //         opacity: 0;
// //         transform: translateY(30px);
// //       }
// //       to {
// //         opacity: 1;
// //         transform: translateY(0);
// //       }
// //     }

// //     @keyframes float {
// //       0%, 100% {
// //         transform: translateY(0px);
// //       }
// //       50% {
// //         transform: translateY(-20px);
// //       }
// //     }

// //     @keyframes pulse {
// //       0%, 100% {
// //         opacity: 1;
// //       }
// //       50% {
// //         opacity: 0.5;
// //       }
// //     }
// //   `;
// //   return (
// //     <div style={styles.container}>
// //       <style>{keyframes}</style>      
// //       {/* Animated Background */}
// //       <div style={styles.animatedBg}>
// //         <div style={styles.floatingOrb1}></div>
// //         <div style={styles.floatingOrb2}></div>
// //         <div style={styles.floatingOrb3}></div>
// //       </div>
// //       {/* Progress Bar */}
// //       <div 
// //         style={{
// //           ...styles.progressBar2,
// //           transform: `scaleX(${scrollProgress})`
// //         }}
// //       />
// //       {/* Custom Cursor */}
// //       <div 
// //         style={{
// //           ...styles.cursor,
// //           left: mousePosition.x - 10,
// //           top: mousePosition.y - 10
// //         }}
// //       />
// //       {/* Navigation */}
// //       <nav style={styles.navbar}>
// //         <div style={styles.navContent}>
// //           <div 
// //             style={styles.logo}
// //             onClick={() => scrollToSection('hero')}
// //           >
// //             Hariprasath A
// //           </div>          
// //           <ul style={{ ...styles.navLinks, display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
// //             {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
// //               <li key={section}>
// //                 <button
// //                   style={{
// //                     ...styles.navLink,
// //                     ...(activeSection === section ? styles.navLinkActive : {})
// //                   }}
// //                   onClick={() => scrollToSection(section)}
// //                   onMouseEnter={(e) => {
// //                     if (activeSection !== section) {
// //                       e.target.style.color = '#8b5cf6';
// //                       e.target.style.background = 'rgba(139, 92, 246, 0.1)';
// //                     }
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     if (activeSection !== section) {
// //                       e.target.style.color = '#9ca3af';
// //                       e.target.style.background = 'transparent';
// //                     }
// //                   }}
// //                 >
// //                   {section.charAt(0).toUpperCase() + section.slice(1)}
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //           <button 
// //             style={{
// //               ...styles.mobileMenuButton,
// //               display: window.innerWidth <= 768 ? 'block' : 'none'
// //             }}
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             {isMenuOpen ? <FaTimes /> : <FaBars />}
// //           </button>
// //         </div>
// //       </nav>
// //       {/* Mobile Menu */}
// //       <div style={styles.mobileMenu}>
// //         {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
// //           <div
// //             key={section}
// //             style={styles.mobileMenuItem}
// //             onClick={() => scrollToSection(section)}
// //           >
// //             {section.charAt(0).toUpperCase() + section.slice(1)}
// //           </div>
// //         ))}
// //       </div>
// //       {/* Hero Section */}
// //       <section id="hero" style={styles.heroSection}>
// //         <div style={styles.heroContent}>
// //           <h1 style={styles.heroTitle}>
// //             Full Stack
// //             <br />
// //             Developer
// //           </h1>          
// //           <p style={styles.heroSubtitle}>
// //             Transforming ideas into digital reality
// //           </p>
// //           <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#9ca3af' }}>
// //             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
// //               <FaCode />5+ Technologies
// //             </span>
// //             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
// //               <FaRocket />3+ Live Projects
// //             </span>
// //             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
// //               <FaStar />99% Client Satisfaction
// //             </span>
// //           </div>
// //           <div style={styles.heroButtons}>
// //             <button
// //               style={styles.primaryButton}
// //               onClick={() => scrollToSection('projects')}
// //               onMouseEnter={(e) => {
// //                 e.target.style.transform = 'translateY(-2px)';
// //                 e.target.style.boxShadow = '0 12px 40px rgba(139, 92, 246, 0.4)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.transform = 'translateY(0)';
// //                 e.target.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.3)';
// //               }}
// //             >
// //               View My Work
// //             </button>
// //             <button
// //               style={styles.secondaryButton}
// //               onClick={() => scrollToSection('contact')}
// //               onMouseEnter={(e) => {
// //                 e.target.style.background = '#8b5cf6';
// //                 e.target.style.color = '#ffffff';
// //                 e.target.style.transform = 'translateY(-2px)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.background = 'transparent';
// //                 e.target.style.color = '#8b5cf6';
// //                 e.target.style.transform = 'translateY(0)';
// //               }}
// //             >
// //               Get In Touch
// //             </button>
// //           </div>
// //           <div style={styles.socialLinks}>
// //             {[
// //               { icon: <FaGithub />, link: 'https://github.com/Hari-224', hoverColor: '#6b7280' },
// //               { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/hariprasath-a-ba72a3299/', hoverColor: '#3b82f6' },
// //               { icon: <SiLeetcode />, link: 'https://leetcode.com/u/Hari-224/', hoverColor: '#f59e0b' }
// //             ].map((social, index) => (
// //               <a
// //                 key={index}
// //                 href={social.link}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 style={styles.socialLink}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.color = social.hoverColor;
// //                   e.target.style.transform = 'scale(1.2) rotate(5deg)';
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.color = '#9ca3af';
// //                   e.target.style.transform = 'scale(1) rotate(0deg)';
// //                 }}
// //               >
// //                 {social.icon}
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       {/* About Section */}
// //       <section id="about" style={styles.section}>
// //         <h2 style={styles.sectionTitle}>About Me</h2>
// //         <div style={styles.aboutGrid}>
// //           <div style={styles.aboutContent}>
// //             <p style={{ marginBottom: '1.5rem' }}>
// //               Currently pursuing <strong style={{ color: '#8b5cf6' }}>B.E. Computer Science</strong> at 
// //               Sri Krishna College of Technology (SKCT), graduating in 2027. I specialize in building 
// //               scalable web applications and mobile solutions that solve real-world problems.
// //             </p>
// //             <p style={{ marginBottom: '2rem' }}>
// //               My expertise spans across modern web technologies, with hands-on experience in
// //               <strong style={{ color: '#60a5fa' }}> React</strong>, 
// //               <strong style={{ color: '#10b981' }}> Spring Boot</strong>, and 
// //               <strong style={{ color: '#f59e0b' }}> cloud technologies</strong>. 
// //               I'm passionate about creating user-centric applications that make a difference.
// //             </p>
// //             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
// //               <a
// //                 href="/resume.pdf"
// //                 style={{
// //                   ...styles.primaryButton,
// //                   textDecoration: 'none',
// //                   display: 'inline-flex',
// //                   alignItems: 'center',
// //                   gap: '0.5rem'
// //                 }}
// //               >
// //                 <FaDownload />
// //                 Download Resume
// //               </a>
// //               <button
// //                 style={styles.secondaryButton}
// //                 onClick={() => scrollToSection('contact')}
// //               >
// //                 <FaEnvelope style={{ marginRight: '0.5rem' }} />
// //                 Contact Me
// //               </button>
// //             </div>
// //           </div>
// //           <div style={styles.achievementsGrid}>
// //             {achievements.map((achievement, index) => (
// //               <div
// //                 key={index}
// //                 style={styles.achievementCard}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.transform = 'translateY(-5px) scale(1.02)';
// //                   e.target.style.background = 'rgba(255, 255, 255, 0.1)';
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.transform = 'translateY(0) scale(1)';
// //                   e.target.style.background = 'rgba(255, 255, 255, 0.05)';
// //                 }}
// //               >
// //                 <div style={styles.achievementIcon}>{achievement.icon}</div>
// //                 <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
// //                   {achievement.title}
// //                 </h3>
// //                 <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
// //                   {achievement.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       {/* Skills Section */}
// //       <section id="skills" style={styles.section}>
// //         <h2 style={styles.sectionTitle}>Skills & Expertise</h2>
// //         <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem' }}>
// //           Mastering cutting-edge technologies to build tomorrow's solutions
// //         </p>        
// //         <div style={styles.skillsGrid}>
// //           {skillCategories.map((category, categoryIndex) => (
// //             <div key={categoryIndex} style={styles.skillCategory}>
// //               <div style={styles.skillCategoryHeader}>
// //                 <span style={styles.skillCategoryIcon}>{category.icon}</span>
// //                 {category.category}
// //               </div>              
// //               {category.skills.map((skill, skillIndex) => (
// //                 <div key={skillIndex} style={styles.skillItem}>
// //                   <div style={styles.skillHeader}>
// //                     <div style={styles.skillName}>
// //                       <span style={styles.skillIcon}>{skill.icon}</span>
// //                       {skill.name}
// //                     </div>
// //                     <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
// //                       {skill.level}%
// //                     </span>
// //                   </div>
// //                   <div style={styles.progressBar}>
// //                     <div 
// //                       style={{
// //                         ...styles.progressFill,
// //                         width: `${skill.level}%`
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //       {/* Projects Section */}
// //       <section id="projects" style={styles.section}>
// //         <h2 style={styles.sectionTitle}>Featured Projects</h2>
// //         <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem' }}>
// //           Showcasing innovative solutions that make an impact
// //         </p>        
// //         <div style={styles.filterButtons}>
// //           {['All', 'Frontend', 'Backend', 'Full Stack'].map((filter) => (
// //             <button
// //               key={filter}
// //               style={{
// //                 ...styles.filterButton,
// //                 ...(projectFilter === filter ? styles.filterButtonActive : {})
// //               }}
// //               onClick={() => setProjectFilter(filter)}
// //               onMouseEnter={(e) => {
// //                 if (projectFilter !== filter) {
// //                   e.target.style.background = 'rgba(139, 92, 246, 0.1)';
// //                   e.target.style.transform = 'translateY(-2px)';
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (projectFilter !== filter) {
// //                   e.target.style.background = 'transparent';
// //                   e.target.style.transform = 'translateY(0)';
// //                 }
// //               }}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //         <div style={styles.projectsGrid}>
// //           {filteredProjects.map((project, index) => (
// //             <div
// //               key={index}
// //               style={styles.projectCard}
// //               onMouseEnter={(e) => {
// //                 e.target.style.transform = 'translateY(-10px)';
// //                 e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.transform = 'translateY(0)';
// //                 e.target.style.boxShadow = 'none';
// //               }}
// //             >
// //               <div style={styles.projectGradient} />
// //               <div style={styles.projectContent}>
// //                 <div style={styles.projectHeader}>
// //                   <h3 style={styles.projectTitle}>{project.title}</h3>
// //                   <span style={styles.projectCategory}>{project.category}</span>
// //                 </div>                
// //                 <p style={styles.projectDescription}>{project.description}</p>                
// //                 <div style={styles.projectSection}>
// //                   <h4 style={styles.projectSectionTitle}>Key Features:</h4>
// //                   <div style={styles.featureTags}>
// //                     {project.features.map((feature, i) => (
// //                       <span key={i} style={styles.featureTag}>{feature}</span>
// //                     ))}
// //                   </div>
// //                 </div>                
// //                 <div style={styles.projectSection}>
// //                   <h4 style={styles.projectSectionTitle}>Impact:</h4>
// //                   <p style={styles.impactText}>{project.impact}</p>
// //                 </div>                
// //                 <div style={styles.projectSection}>
// //                   <h4 style={styles.projectSectionTitle}>Tech Stack:</h4>
// //                   <div style={styles.techTags}>
// //                     {project.tech.map((tech, i) => (
// //                       <span key={i} style={styles.techTag}>{tech}</span>
// //                     ))}
// //                   </div>
// //                 </div>                
// //                 <div style={styles.projectLinks}>
// //                   {project.github && (
// //                     <a
// //                       href={project.github}
// //                       style={styles.projectLink}
// //                       onMouseEnter={(e) => e.target.style.color = '#ffffff'}
// //                       onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
// //                     >
// //                       <FaGithub />
// //                       Code
// //                     </a>
// //                   )}
// //                   {project.demo && (
// //                     <a
// //                       href={project.demo}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={styles.projectLink}
// //                       onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
// //                       onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
// //                     >
// //                       <FaExternalLinkAlt />
// //                       Live Demo
// //                     </a>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //       {/* Contact Section */}
// //       <section id="contact" style={styles.section}>
// //         <h2 style={styles.sectionTitle}>Let's Build Something Amazing</h2>
// //         <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem' }}>
// //           Ready to bring your ideas to life? Let's connect and make it happen!
// //         </p>        
// //         <div style={styles.contactGrid}>
// //           <div style={styles.contactForm}>
// //             <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Send Message</h3>
// //             <form onSubmit={handleSubmit}>
// //               <div style={styles.formGroup}>
// //                 <label style={styles.label}>Name</label>
// //                 <input
// //                   type="text"
// //                   style={styles.input}
// //                   placeholder="Your full name"
// //                   value={formData.name}
// //                   onChange={(e) => setFormData({...formData, name: e.target.value})}
// //                   required
// //                   onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
// //                   onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
// //                 />
// //               </div>
// //               <div style={styles.formGroup}>
// //                 <label style={styles.label}>Email</label>
// //                 <input
// //                   type="email"
// //                   style={styles.input}
// //                   placeholder="your.email@example.com"
// //                   value={formData.email}
// //                   onChange={(e) => setFormData({...formData, email: e.target.value})}
// //                   required
// //                   onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
// //                   onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
// //                 />
// //               </div>
// //               <div style={styles.formGroup}>
// //                 <label style={styles.label}>Message</label>
// //                 <textarea
// //                   style={styles.textarea}
// //                   placeholder="Tell me about your project..."
// //                   value={formData.message}
// //                   onChange={(e) => setFormData({...formData, message: e.target.value})}
// //                   required
// //                   onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
// //                   onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 style={{
// //                   ...styles.submitButton,
// //                   opacity: isSubmitting ? 0.7 : 1,
// //                   cursor: isSubmitting ? 'not-allowed' : 'pointer'
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   if (!isSubmitting) {
// //                     e.target.style.transform = 'translateY(-2px)';
// //                   }
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.transform = 'translateY(0)';
// //                 }}
// //               >
// //                 {isSubmitting ? 'Sending...' : 'Send Message'}
// //               </button>
// //               {submitStatus === 'success' && (
// //                 <p style={{ color: '#10b981', textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
// //                   ✓ Message sent successfully! I'll get back to you soon.
// //                 </p>
// //               )}
// //             </form>
// //           </div>
// //           <div style={styles.contactInfo}>
// //             <div>
// //               <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Get In Touch</h3>
// //               <p style={{ color: '#d1d5db', marginBottom: '2rem', lineHeight: 1.6 }}>
// //                 I'm always excited to discuss new opportunities, innovative projects, 
// //                 or just chat about technology. Feel free to reach out!
// //               </p>
// //             </div>
// //             {[
// //               {
// //                 icon: <FaEnvelope />,
// //                 title: "Email",
// //                 value: "akhariakhari7@gmail.com",
// //                 link: "mailto:akhariakhari7@gmail.com"
// //               },
// //               {
// //                 icon: <FaLinkedin />,
// //                 title: "LinkedIn",
// //                 value: "Connect with me",
// //                 link: "https://www.linkedin.com/in/hariprasath-a-ba72a3299/"
// //               },
// //               {
// //                 icon: <FaGithub />,
// //                 title: "GitHub",
// //                 value: "View my repositories",
// //                 link: "https://github.com/Hari-224"
// //               }
// //             ].map((contact, index) => (
// //               <a
// //                 key={index}
// //                 href={contact.link}
// //                 target={contact.link.startsWith('http') ? '_blank' : '_self'}
// //                 rel="noopener noreferrer"
// //                 style={styles.contactCard}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.transform = 'translateX(10px)';
// //                   e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.transform = 'translateX(0)';
// //                   e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
// //                 }}
// //               >
// //                 <div style={styles.contactIcon}>{contact.icon}</div>
// //                 <div>
// //                   <h4 style={{ fontWeight: 'bold', color: '#ffffff', marginBottom: '0.25rem' }}>
// //                     {contact.title}
// //                   </h4>
// //                   <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
// //                     {contact.value}
// //                   </p>
// //                 </div>
// //               </a>
// //             ))}

// //             <div style={styles.statusIndicator}>
// //               <div style={styles.statusDot}></div>
// //               <div>
// //                 <span style={{ color: '#10b981', fontWeight: 'bold' }}>Available for new opportunities</span>
// //                 <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: 0 }}>
// //                   Actively seeking internships and junior developer positions
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       {/* Footer */}
// //       <footer style={styles.footer}>
// //         <div style={styles.footerContent}>
// //           <div style={styles.footerGrid}>
// //             <div style={{ textAlign: 'left' }}>
// //               <div style={{ ...styles.logo, fontSize: '2rem', marginBottom: '0.5rem' }}>
// //                 Hariprasath A
// //               </div>
// //               <p style={{ color: '#9ca3af' }}>Full Stack Developer & Problem Solver</p>
// //             </div>
            
// //             <div style={styles.socialLinks}>
// //               {[
// //                 { icon: <FaGithub />, link: 'https://github.com/Hari-224', hoverColor: '#6b7280' },
// //                 { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/hariprasath-a-ba72a3299/', hoverColor: '#3b82f6' },
// //                 { icon: <SiLeetcode />, link: 'https://leetcode.com/u/Hari-224/', hoverColor: '#f59e0b' },
// //                 { icon: <FaEnvelope />, link: 'mailto:akhariakhari7@gmail.com', hoverColor: '#ef4444' }
// //               ].map((social, index) => (
// //                 <a
// //                   key={index}
// //                   href={social.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   style={{ ...styles.socialLink, color: '#6b7280' }}
// //                   onMouseEnter={(e) => {
// //                     e.target.style.color = social.hoverColor;
// //                     e.target.style.transform = 'scale(1.2) rotate(5deg)';
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.target.style.color = '#6b7280';
// //                     e.target.style.transform = 'scale(1) rotate(0deg)';
// //                   }}
// //                 >
// //                   {social.icon}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
          
// //           <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#9ca3af' }}>
// //             <p>&copy; 2025 Hariprasath A. Crafted with ❤️ and lots of ☕</p>
// //           </div>
// //         </div>
// //       </footer>
// //       {/* Scroll to Top Button */}
// //       {scrollProgress > 0.2 && (
// //         <button
// //           style={styles.scrollToTop}
// //           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// //           onMouseEnter={(e) => {
// //             e.target.style.transform = 'scale(1.1)';
// //           }}
// //           onMouseLeave={(e) => {
// //             e.target.style.transform = 'scale(1)';
// //           }}
// //         >
// //           <FaArrowUp />
// //         </button>
// //       )}
// //     </div>
// //   );
// // };
// // export default PremiumPortfolio;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import Cursor from "./components/Cursor";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//       <ScrollToTop />
//       <Cursor />
//     </>
//   );
// };

// export default App;
import React from 'react';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ProgressBar from './components/common/ProgressBar';
// import CustomCursor from './components/common/CustomCursor';
import AnimatedBackground from './components/layout/AnimatedBackground';
import MobileMenu from './components/layout/MobileMenu';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';
// import { useMousePosition } from './hooks/useMousePosition';
import './App.css';

const App = () => {
  const scrollProgress = useScrollProgress();
  const { activeSection, isMenuOpen, setIsMenuOpen } = useActiveSection();
  // const mousePosition = useMousePosition();

  return (
    <div className="portfolio-container">
      <AnimatedBackground />
      <ProgressBar progress={scrollProgress} />
      {/* <CustomCursor position={mousePosition} /> */}
      
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {scrollProgress > 0.2 && <ScrollToTop />}
    </div>
  );
};

export default App;