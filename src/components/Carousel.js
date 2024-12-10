import React, { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto m-5">
      {/* Image container */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-auto transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 focus:outline-none"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 focus:outline-none"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}
