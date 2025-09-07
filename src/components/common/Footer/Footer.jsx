import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { icon: <FaEnvelope />, link: "mailto:akhariakhari7@gmail.com", label: "Email" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hariprasath-a-ba72a3299/", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/Hari-224", label: "GitHub" },
    { icon: <FaCode />, link: "https://leetcode.com/u/Hari-224/", label: "LeetCode" },
  ];

  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-socials">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="footer-icon"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="footer-text">
          © {new Date().getFullYear()} Hariprasath A — Building Digital Dreams
        </p>
      </div>
    </footer>
  );
};

export default Footer;
