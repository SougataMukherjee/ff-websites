"use client";
import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "@/Context/GlobalContext";
import Style from "./Feature.module.scss";
import Image from "next/image";
import { Button } from "pixel-react";
import HomePageFeatureImageSkeleton from "@/components/skeleton/HomePageFeatureImageSkeleton";
const Feature = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  // const { user } = useGlobalContext();
  const handleImageLoad = () => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 2000);
  };

  useEffect(() => {
    setIsImageLoaded(false);
  }, []);
  return (
    <section className={Style["ff-homepage-feature-wrapper"]}>
      <article className={Style["ff-homepage-feature-text-section"]}>
        <header className={Style["ff-homepage-feature-main-text"]}>
          <span className="">Extreme Automation Testing</span>
        </header>

        <aside className={Style["ff-homepage-feature-sub-text"]}>
          <span>
            FireFlink Platform, a high-speed test automation platform, is the
            future of agile software testing.
          </span>
          <span>
            It is a revolutionary advancement in the testing industry because it
            is a script-less, end-to-end test
          </span>
          <span>
            automation platform for Web, Android, iOS, and API test’s.
          </span>
        </aside>

        <section style={{ display: "flex", gap: "10px" }}>
          <Button
            className={Style["ff-homepage-feature-button"]}
            variant="secondary"
            label="Schedule a free demo"
            size="large"
            onClick={() => console.log("click")}
          />
          <Button
            className={Style["ff-homepage-feature-button"]}
            variant="primary"
            label="Sign up now"
            size="large"
            onClick={() => console.log("click")}
          />
        </section>
      </article>

      <figure className={Style["ff-homepage-feature-img-section"]}>
        {!isImageLoaded && (
          <HomePageFeatureImageSkeleton
            className={Style["ff-homepage-feature-img"]}
          />
        )}
        <Image
          src={"/images/fireflink_platform_feature.svg"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="responsive"
          width={1156}
          height={720}
          alt="homepage-feature-image"
          className={Style["ff-homepage-feature-img"]}
          onLoadingComplete={handleImageLoad}
        />
      </figure>
    </section>
  );
};

export default Feature;
