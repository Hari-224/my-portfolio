import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Divider Line */}
      <div className="footer-divider"></div>

      {/* Social Links */}
      <div className="footer-socials">
        <a
          href="mailto:akhariakhari7@gmail.com"
          aria-label="Email"
          className="footer-icon"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Hari-224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="footer-icon"
        >
          <FaCode />
        </a>
      </div>

      {/* Bottom Info */}
      <div className="footer-bottom">
        <p className="footer-text">
          © {new Date().getFullYear()} Hari — All Rights Reserved
        </p>
        {/* <p className="footer-credit">
          Built with <span className="highlight">React</span> ⚡
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
