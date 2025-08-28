// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "Bus Ticket Booking Backend",
    description:
      "A robust backend API developed using Spring Boot for managing bus ticket reservations. It supports features such as viewing available buses, managing users and drivers, and storing data securely in MySQL.",
    category: [""],
    tech: ["Spring Boot", "MySQL"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Company Chatbot (Internship Project)",
    description:
      "Created an effective and interactive online chatbot for Suguna Groups to automate customer queries and clarify doubts seamlessly.",
    category: ["Web", "Mobile"],
    tech: ["Flutter", "MySQL", "Spring Boot"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Mr. Thamizha Studio Website",
    description:
      "A React website designed for a wedding planner and DJ, highlighting event planning services and club/party entertainment.",
    category: ["Web"],
    tech: ["React", "JavaScript", "CSS"],
    demo: "https://mrthamizhastudio.netlify.app/",
  },
  {
    title: "Leave Management System",
    description:
      "A full-stack application to manage employee leaves, built with React for the frontend, Spring Boot for the backend, and MySQL as the database. Features include leave request submission, approval workflow, and admin/user dashboards.",
    category: ["Web"],
    tech: ["React", "Spring Boot", "MySQL"],
    demo: "",
    gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl shadow-md"
            style={{ background: project.gradient || "#f5f5f5" }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-sm text-gray-800">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                View Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
