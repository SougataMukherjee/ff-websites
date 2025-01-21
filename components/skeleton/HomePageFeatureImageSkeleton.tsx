import React, { type FC } from "react";
import "./HomePageFeatureImageSkeleton.scss";
import { HomePageFeatureImageSkeletonProps } from "@/types/HomePageFeatureImageSkeleton";
const HomePageFeatureImageSkeleton: FC<HomePageFeatureImageSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div className={`home-page-feature-image-skeleton `}>
      <div className={`skeleton-item ${className}`}></div>
    </div>
  );
};

export default HomePageFeatureImageSkeleton;
