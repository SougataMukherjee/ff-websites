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

    // timeoutRef.current = setTimeout(() => {
    //   setIsPaused(false);
    //   startAutoSlide();
    // }, 5000);
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

  // const prevSlide = () => {
  //   stopAutoSlide();
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   stopAutoSlide();
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  // };

  // const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fade, setFade] = useState(true);
  const [slideDirection, setSlideDirection] = useState("forward");

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setFade(false);
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
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideDirection("forward");
    stopAutoSlide();
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const sliderImages = document.querySelectorAll(".slider img");
    sliderImages.forEach((img) => {
      img.style.animationPlayState = isPlaying ? "paused" : "running";
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
        <div className="arrow_left_homepage_banner_left"></div>

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
          <Icon
            name="arrow_left_accordian"
            onClick={prevSlide}
            color="#e5eeee"
            height={40}
            width={40}
          />
          <button className="play-pause" onClick={togglePlayPause}>
            {isPlaying ? (
              <Icon name="record_play" />
            ) : (
              <Icon name="video_play_icon" />
            )}
          </button>
          <div className="arrow_left_homepage_banner_right">
            <Icon
              name="arrow_right_icon"
              onClick={nextSlide}
              color="#e5eeee"
              height={40}
              width={40}
            />
          </div>
        </div>
      </figure>
    </section>
  );
};

export default Feature;
