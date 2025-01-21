"use client";
import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "@/Context/GlobalContext";
import "./Feature.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "pixel-react";
import HomePageFeatureImageSkeleton from "@/components/skeleton/HomePageFeatureImageSkeleton";
const Feature = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  // const { user } = useGlobalContext();
  const route = useRouter();
  const handleImageLoad = () => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 2000);
  };

  useEffect(() => {
    setIsImageLoaded(false);
  }, []);
  return (
    <section className="ff-homepage-feature-wrapper">
      <article className="ff-homepage-feature-text-section">
        <header className="ff-homepage-feature-main-text">
          <span className="">Experience 4x faster test automation</span>
          <span>using FireFlink AI</span>
        </header>

        <aside className="ff-homepage-feature-sub-text">
          <span>
            A heavily AI-infused test automation platform, that allows testers
            to develop automation scripts
          </span>
          <span>
            faster than ever! Experience speed, accuracy, and enhanced ROI with
            FireFlink!
          </span>
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
        {!isImageLoaded && (
          <HomePageFeatureImageSkeleton className="ff-homepage-feature-img" />
        )}
        <Image
          src={"/images/homepage_feature.svg"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="responsive"
          width={1156}
          height={720}
          alt="homepage-feature-image"
          className="ff-homepage-feature-img"
          onLoadingComplete={handleImageLoad}
        />
      </figure>
    </section>
  );
};

export default Feature;
