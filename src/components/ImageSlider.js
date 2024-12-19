import React, { useState } from 'react';

const ImageSlider = () => {
  const [index, setIndex] = useState(0); // To keep track of the current visible box
  
  // Box names for display (this can be replaced with images or custom content)
  const boxes = [
    'PROJECT 1', 
    'PROJECT 2', 
    'PROJECT 3', 
    'PROJECT 4', 
    'PROJECT 5'
  ];

  // Move to the next box
  const nextSlide = () => {
    if (index < boxes.length - 1) {
      setIndex(index + 1);
    }
  };

  // Move to the previous box
  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 relative">
      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 text-white text-3xl p-2 hover:bg-gray-800 rounded-full focus:outline-none"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Box Container */}
      <div className="overflow-hidden w-full sm:w-80">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {boxes.map((box, idx) => (
            <div
              key={idx}
              className="relative flex-none w-full sm:w-80 h-64 mt-28 mb-20 bg-green-900 text-white text-xl flex flex-col justify-between items-start rounded-lg shadow-lg p-4 overflow-hidden"
            >
              {/* Heading */}
              <h2 className="text-2xl font-semibold mb-4 truncate">{`Project ${idx + 1}`}</h2>
              {/* Description */}
              <p className="text-md overflow-auto text-ellipsis">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 text-white text-3xl p-2 hover:bg-gray-800 rounded-full focus:outline-none"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
