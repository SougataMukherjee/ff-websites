import React, { useState, useEffect, useRef } from "react";
import "./Feature.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Icon } from "pixel-react";
import bannerData from "@/constants/BannerData";

const Feature = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  // Function to start auto slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 4000);
  };

  // Function to stop auto slide
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPaused(true);

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      startAutoSlide();
    }, 5000);
  };

  // Start auto-slide when component mounts
  useEffect(() => {
    if (!isPaused) {
      startAutoSlide();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused]);

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  return (
    <section className="ff-homepage-feature-wrapper">
      <article className="ff-homepage-feature-text-section">
        <header className="ff-homepage-feature-main-text">
          {bannerData.map((item, index) => (
            <span
              key={item.id}
              className={index === currentIndex ? "active" : ""}
            >
              {item.title}
            </span>
          ))}
        </header>

        <aside className="ff-homepage-feature-sub-text">
          {bannerData.map((item, index) => (
            <span
              key={item.id}
              className={index === currentIndex ? "active" : ""}
            >
              {item.description}
            </span>
          ))}
        </aside>

        <section>
          <Button
            className="ff-homepage-feature-button"
            variant="secondary"
            label="Schedule a free demo"
            size="large"
            onClick={() => router.push("http://localhost:3000/schedule-demo")}
          />
        </section>
      </article>

      <figure className="ff-homepage-feature-img-section">
        <div className="arrow_left_homepage_banner_left">
          <Icon
            name="arrow_left_accordian"
            onClick={prevSlide}
            color="#e5eeee"
            height={40}
            width={40}
          />
        </div>
        {bannerData.map((item, index) => (
          <div
            key={item.id}
            className={`image-container ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <Image
              src={item.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              layout="responsive"
              width={1156}
              height={720}
              alt="homepage-feature-image"
              className="ff-homepage-feature-img"
            />
          </div>
        ))}
        <div className="arrow_left_homepage_banner_right">
          <Icon
            name="arrow_right_icon"
            onClick={nextSlide}
            color="#e5eeee"
            height={40}
            width={40}
          />
        </div>
      </figure>
    </section>
  );
};

export default Feature;
