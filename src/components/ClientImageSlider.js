import React, { useRef, useState, useEffect } from "react";
import image1 from "../images/image1.jpeg";
import image3 from "../images/image3.jpeg";
import image2 from "../images/image2.jpeg";
import image4 from "../images/image4.jpeg";

const ClientImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
  ];

  const boxWidth = 288; // Box width (256px) + space-x-6 (32px)

  const updateSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex]);

  const generateSnowflakes = (num) => {
    const snowflakes = [];
    for (let i = 0; i < num; i++) {
      snowflakes.push(
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`, // Random position from 0 to 100% of viewport width
            animationDuration: `${Math.random() * 5 + 5}s`, // Random duration between 5 and 10 seconds
            animationDelay: `${Math.random() * 5}s`, // Random delay for staggered start
            opacity: Math.random() * 0.5 + 0.3, // Random opacity for realism
          }}
        ></div>
      );
    }
    return snowflakes;
  };

  return (
    <section className="py-20 relative overflow-hidden ">
      {/* Snowflakes effect */}
      <div className="snowfall">{generateSnowflakes(200)}</div>

      <div className="container mx-auto w-full overflow-hidden">
        {/* Image Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 space-x-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-72 h-72 bg-violet-400 p-4 rounded-lg shadow-md flex-shrink-0 relative"
            >
              <p className="absolute top-4 left-4 text-white font-extrabold text-xl">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
              <div
                className="w-24 h-24 rounded-full ml-16 mt-10 overflow-hidden bg-white"
              >
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 flex space-x-4 z-10">
        <button
          onClick={handlePrev}
          className="text-violet-300 p-3 rounded-full hover:bg-violet-600 transition duration-300"
          disabled={currentIndex === 0}
        >
          <span className="text-4xl">←</span>
        </button>
        <button
          onClick={handleNext}
          className="text-violet-300 p-3 rounded-full hover:bg-violet-600 transition duration-300"
          disabled={currentIndex === images.length - 1}
        >
          <span className="text-4xl">→</span>
        </button>
      </div>

      {/* Snowflakes Styling */}
      <style jsx>{`
        .snowfall {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .snowfall div {
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: white;
          border-radius: 50%;
          animation: snow 10s linear infinite;
        }

        .snowfall div:nth-child(odd) {
          animation-duration: 12s;
        }

        .snowfall div:nth-child(even) {
          animation-duration: 8s;
        }

        @keyframes snow {
          0% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientImageSlider;
