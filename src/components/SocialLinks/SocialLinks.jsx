import React from 'react';
import { GithubIcon, LinkedInIcon } from '../Icons';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="connect-social">
      Connect with me
      <ul>
        <li>
          <a href="https://github.com/amitroy-thedev" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="https://linkedin.in/in/amitroy-thedev" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;