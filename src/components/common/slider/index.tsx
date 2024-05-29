"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface Slide {
  id: number;
  content: {
    comment: string;
    imageAvatar: string;
    role: string;
    name: string;
  };
}

interface CustomSliderProps {
  slides: Slide[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start at the first actual slide
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [transition, setTransition] = useState<boolean>(true);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideCount = slides.length;

  // Clone slides for seamless transition
  const slidesWithClones = [slides[slideCount - 1], ...slides, slides[0]];

  const prevSlide = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTransition(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTransition(true);
    if (translateX > 100) {
      prevSlide();
    } else if (translateX < -100) {
      nextSlide();
    }
    setTranslateX(0);
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
      setTranslateX(0);
    };

    window.addEventListener("mouseup", handleMouseUpGlobal);

    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, []);

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(slideCount);
      }, 500);
    } else if (currentIndex === slidesWithClones.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 500);
    }
  }, [currentIndex, slideCount, slidesWithClones.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 12000); // Slide every 12 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Adjust slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3); // Adjust this number based on your preference for desktop view
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={sliderRef}
    >
      <div
        className={`flex md:gap-x-8 md:py-4 bg-transparent ${
          transition ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(calc(-${
            currentIndex * (100 / slidesToShow)
          }% + ${translateX}px))`,
        }}
      >
        {slidesWithClones.map((slide, index) => (
          <div
            key={index}
            className="box-border hover:cursor-pointer bg-white border md:border-none md:shadow-lg p-6 md:p-12 rounded"
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            <div>
              <p className="text-base font-medium text-secondary">{`"${slide.content.comment}"`}</p>
              <div className="mt-5 flex items-center gap-x-4">
                <Image
                  width={60}
                  height={60}
                  src={slide.content.imageAvatar}
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-base font-bold">{slide.content.name}</h3>
                  <p className="text-base font-medium text-secondary mt-2">{slide.content.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
