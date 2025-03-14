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

  const [isPlaying, setIsPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState("forward");

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPaused(false); // Enable transition after a delay
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const prevSlide = () => {
    setSlideDirection("backward");
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideDirection("forward");
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const sliderImages = document.querySelectorAll(".slider img");
    sliderImages.forEach((img) => {
      (img as HTMLImageElement).style.animationPlayState = isPlaying
        ? "paused"
        : "running";
    });
  };
  return (
    <section className="ff-homepage-feature-wrapper">
      <article className="ff-homepage-feature-text-section">
        <header
          className={`ff-homepage-feature-main-text ${
            isPaused ? "paused" : "fade"
          }`}
        >
          {bannerData.map((item, index) => (
            <span
              key={item.id}
              className={index === currentIndex ? "active" : ""}
            >
              {item.title}
            </span>
          ))}
        </header>

        <aside
          className={`ff-homepage-feature-sub-text ${
            isPaused ? "paused" : "fade"
          }`}
        >
          {bannerData.map((item, index) => (
            <span
              key={item.id}
              className={index === currentIndex ? "active" : ""}
            >
              {item.description}
            </span>
          ))}
        </aside>

        <section style={{ position: "relative", top: "-10px" }}>
          <Button
            className="ff-homepage-feature-button"
            variant="custom"
            style={{
              padding: "8px 37px",
              background: "var(--base-bg-color)",
              borderRadius: "8px",
            }}
            typographyStyle={{
              color: "var(--ff-primary-color)",
              fontSize: 12,
              fontWeight: 500,
            }}
            label="Schedule a free demo"
            size="large"
            onClick={() => router.push("http://localhost:3000/schedule-demo")}
          />
        </section>
        <div className="arrow_left_homepage_banner_left">
          <Icon
            name="arrow_left_accordian"
            onClick={prevSlide}
            color="#ffffff"
            height={40}
            width={40}
          />
        </div>
        <div className="arrow_left_homepage_banner_right">
          <Icon
            name="arrow_right_icon"
            onClick={nextSlide}
            color="#ffffff"
            height={40}
            width={40}
          />
        </div>
      </article>

      <figure className="ff-homepage-feature-img-section">
        <div className="slider">
          <div className="slider-images">
            {bannerData.map((item, index) => (
              <Image
                key={item.image}
                src={item.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                layout="responsive"
                width={1156}
                height={720}
                alt="Slide"
                className={
                  index === currentIndex
                    ? slideDirection === "forward"
                      ? "active"
                      : "reverse"
                    : ""
                }
              />
            ))}
          </div>

          <button className="play-pause" onClick={togglePlayPause}>
            {isPlaying ? (
              <Icon name="record_play" height={40} width={40} />
            ) : (
              <Icon name="video_play_icon" height={40} width={40} />
            )}
          </button>
        </div>
      </figure>
    </section>
  );
};

export default Feature;
