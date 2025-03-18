import React, { useState, useRef } from "react";
import "./Feature.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Icon } from "pixel-react";
import bannerData from "@/constants/BannerData";

const Feature = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Icon
        name="arrow_left_accordian"
        onClick={onClick}
        color="#ffffff"
        height={40}
        width={40}
        className="custom-prev-arrow arrow-btn"
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Icon
        name="arrow_right_icon"
        onClick={onClick}
        color="#ffffff"
        height={40}
        width={40}
        className="custom-next-arrow arrow-btn"
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (index) => setCurrentIndex(index),
  };
  const togglePlayPause = () => {
    if (sliderRef.current) {
      if (isPlaying) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
    }
    setIsPlaying((prev) => !prev);
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
          onClick={() => router.push("/schedule-demo")}
        />
      </article>

      <figure className="ff-homepage-feature-img-section">
        <Slider ref={sliderRef} {...settings}>
          {bannerData.map((item) => (
            <div key={item.id} className="slider-item">
              <Image
                src={item.image}
                layout="responsive"
                width={1156}
                height={720}
                alt="Slide"
              />
            </div>
          ))}
        </Slider>

        <button className="play-pause" onClick={togglePlayPause}>
          {isPlaying ? (
            <Icon name="record_play" height={40} width={40} />
          ) : (
            <Icon name="video_play_icon" height={40} width={40} />
          )}
        </button>
      </figure>
    </section>
  );
};

export default Feature;
