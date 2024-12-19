import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import leftImage from '../images/left1.avif'; // Replace with the actual path for the left image
import rightImage from '../images/right.jpg'; // Replace with the actual path for the right image

const ContactSection = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center p-4 relative overflow-hidden">
      {/* Left Section: Contact Information */}
      <div className="w-full flex flex-col items-center text-center space-y-6 px-4">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-blue-950 tracking-wide">
          WE SERVE ALL OVER THE WORLD
        </h1>

        {/* Address Info */}
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white h-6 w-6" />
          <span className="text-sm font-semibold text-white">
            JAGARPADA, BHUBANESWAR, ODISHA, 751006
          </span>
        </div>

        {/* Email Info */}
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-white h-6 w-6" />
          <span className="text-sm font-semibold text-white">
            INFO@GRAPSNEXTSOCIAL.COM
          </span>
        </div>

        {/* Phone Info */}
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-white h-6 w-6" />
          <span className="text-sm font-semibold text-white">
            123456789
          </span>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full mt-6 flex justify-center">
        <img
          src={rightImage}
          alt="rightImage"
          className="w-[70%] h-[60vh] object-cover rounded-lg shadow-lg animate-pulse"
        />
      </div>
    </div>
  );
};

export default ContactSection;
