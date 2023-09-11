import React from 'react';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <Link></Link>
        &copy; {new Date().getFullYear()} Your App Name
      </div>
    </footer>
  );
}

export default Footer;
