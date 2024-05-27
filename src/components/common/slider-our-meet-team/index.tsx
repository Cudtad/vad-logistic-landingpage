/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef, useEffect } from "react";

interface Slide {
  id: number;
  content: {
    imageAvatar: string;
    role: string;
    name: string;
  };
}

interface CustomSliderProps {
  slides: Slide[];
}

const SliderOurMeetTeam: React.FC<CustomSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start at the first actual slide
//   const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideCount = slides.length;

  // Clone slides for seamless transition
  const slidesWithClones = [slides[slideCount - 1], slides[slideCount - 2], ...slides, slides[0], slides[1]];

//   const prevSlide = () => {
//     setTransition(true);
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//   };

  const nextSlide = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//     setTransition(false);
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging) return;
//     const currentX = e.clientX;
//     const deltaX = currentX - startX;
//     setTranslateX(deltaX);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     setTransition(true);
//     if (translateX > 100) {
//       prevSlide();
//     } else if (translateX < -100) {
//       nextSlide();
//     }
//     setTranslateX(0);
//   };

//   useEffect(() => {
//     const handleMouseUpGlobal = () => {
//       setIsDragging(false);
//       setTranslateX(0);
//     };

//     window.addEventListener("mouseup", handleMouseUpGlobal);

//     return () => {
//       window.removeEventListener("mouseup", handleMouseUpGlobal);
//     };
//   }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransition(false);
      setCurrentIndex(slideCount);
    } else if (currentIndex === slidesWithClones.length - 2) {
      setTransition(false);
      setCurrentIndex(2);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    //   onMouseUp={handleMouseUp}
      ref={sliderRef}
    >
      <div
        className={`flex gap-x-0.5 py-4 bg-transparent ${
          transition ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(calc(-${
            currentIndex * 33.33
          }% + ${translateX}px))`,
        }}
      >
        {slidesWithClones.map((slide, index) => (
          <div
            key={index}
            className="box-border hover:cursor-pointer rounded"
            style={{ flex: "0 0 33.33%" }}
          >
            <div>
              <img src={slide.content.imageAvatar} alt="Avatar" />
              <div className="mt-5">
                <h3 className="text-xl font-bold text-center text-black hover:cursor-pointer hover:text-primary">{slide.content.name}</h3>
                <p className="text-base font-medium text-secondary mt-1 text-center">
                  {slide.content.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderOurMeetTeam;
