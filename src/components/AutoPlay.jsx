import React, { useState } from "react";
// @ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800, // Smoother transition speed
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", // Custom easing for premium feel
    accessibility: false,
    
    // Use beforeChange for immediate dot update
    beforeChange: (current, next) => setActiveSlide(next),

    // Custom Dot Design
    customPaging: (i) => (
      <div
        className={`h-2 rounded-full transition-all duration-500 ease-in-out cursor-pointer
          ${activeSlide === i 
            ? "w-8 bg-[#FFCA40]"  // Active: Wide & Yellow
            : "w-2 bg-[#E5E5E5] hover:bg-gray-300" // Inactive: Small & Gray
          }
        `}
      />
    ),

    // Dots Container
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}> 
        <ul className="flex justify-center items-center gap-2 m-0 p-0">
          {dots}
        </ul>
      </div>
    ),
  };


  return (
    <div className="slider-container w-full  sm:max-w-[300px] lg:max-w-[480px] relative mb-8">
      {/* Override internal slick styles to allow custom dots */}
      <style>{`
        .slick-dots li { width: auto !important; margin: 0 !important; }
        .slick-dots li button { width: auto !important; height: auto !important; padding: 0 !important; }
        .slick-dots li button:before { content: '' !important; }
      `}</style>

      <Slider {...settings}>
        {[
          "/src/assets/11111.jpg",
          "/src/assets/222222.jpg",
          "/src/assets/33333.jpg"
        ].map((src, index) => (
          <div key={index} className="outline-none px-1 flex justify-center items-center w-full h-full">
            <img 
              src={src} 
              className={`mx-auto w-full object-contain rounded-2xl transition-all duration-500 ease-in-out h-[200px] sm:h-[400px] lg:h-[500px]
                ${activeSlide === index ? "opacity-100 scale-100" : "opacity-40 scale-95 blur-[1px]"} 
              `} 
              alt={`slide ${index + 1}`} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
