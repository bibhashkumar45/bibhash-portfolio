import React from 'react';
import { github } from '../assets';
import { linkdin } from '../assets';
import { whatsapp } from '../assets'; 


const FooterBox = () => {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto text-center">
        {/* <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p> */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/bibhashkumar45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
             <img src={github} alt="logo" className="w-9 h-9 object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/bibhash-kumar-5033ab269/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
               <img src={linkdin} alt="logo" className="w-9 h-9 object-contain" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
               <img src={whatsapp} alt="logo" className="w-9 h-9 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBox;
