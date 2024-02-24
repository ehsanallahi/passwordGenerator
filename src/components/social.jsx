import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaFollows = () => {
  return (
    <div className="bg-black text-white rounded-lg p-8">
      <h2 className="text-center text-xl mb-4"> Connect with Me on Social Media</h2>
      <div className="flex justify-center mb-4">
        {/* Social media icons */}
        <a href="https://www.facebook.com/EhsanAllahiOfficial/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://twitter.com/ehsandhillons" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-blue-400 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/EhsanAllahiOfficial" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-500 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/ehsanallahiofficial" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-blue-600 transition duration-300" />
        </a>
      </div>
      <div className="text-center">
        {/* GitHub button */}
        <a href="https://github.com/yourusername/yourrepository" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition duration-300">View on GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaFollows;
