"use client";
import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "@/Context/GlobalContext";
import "./Feature.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "pixel-react";
import bannerData from "@/constants/BannerData";
const Feature = () => {
  // const { user } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(bannerData);
  const route = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            onClick={() => route.push("http://localhost:3000/schedule-demo")}
          />
        </section>
      </article>

      <figure className="ff-homepage-feature-img-section">
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
      </figure>
    </section>
  );
};

export default Feature;
