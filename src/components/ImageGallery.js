import React, { useState } from "react";
import image1 from "../images/AI.jpg";
import image2 from "../images/da.webp";
import image3 from "../images/ML.webp";
import image4 from "../images/wd.jpeg";
import image5 from "../images/AI.jpg";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [image1, image2, image3, image4, image5];
  const texts = [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Data Analysis",
    "Cloud Computing",
  ];

  // Handler for "Learn More" button clicks
  const handleLearnMore = (e, text) => {
    e.stopPropagation(); // Prevent triggering parent onClick
    alert(`You clicked on ${text}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
      {images.map((src, index) => {
        const isSelected = selectedImage === index;

        return (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative cursor-pointer transition-all duration-500 ${
              isSelected
                ? "w-full md:w-[400px] h-[450px]"
                : "w-4/5 md:w-[200px] h-[350px]"
            }`}
          >
            {/* Image */}
            <img
              src={src}
              alt={texts[index]}
              className="object-cover w-full h-full rounded-xl"
            />

            {/* Overlay with Text and Button */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
              <button
                onClick={(e) => handleLearnMore(e, texts[index])}
                className="mt-2 px-4 py-2 bg-gradient-to-r from-sky-400 via-blue-500 to-pink-500 hover:from-sky-600 hover:via-blue-600 hover:to-pink-600 text-white font-semibold rounded-md transition duration-300"
              >
                Learn More
              </button>
              <h3 className="text-lg md:text-xl font-bold mt-2">{texts[index]}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
