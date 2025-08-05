import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
        <div>
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;