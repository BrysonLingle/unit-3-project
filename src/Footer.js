import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} NFL Stats by Bryson Lingle. My Personal GitHub: 
        <a href="https://github.com/BrysonLingle" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
          https://github.com/BrysonLingle
        </a>
      </div>
    </footer>
  );
}

export default Footer;
