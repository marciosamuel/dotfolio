import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => (
  <div className="social">
    <a href="github.com/marciosamuel">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
    <a href="linkedin.com/in/marciosamuel">
      <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
    </a>
    <a href="instagram.com/marciosamuel_">
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </a>
    <a href="twitter.com/marciosamuel_">
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
  </div>
);

export default SocialLinks;
