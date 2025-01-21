import React, { type FC } from "react";
import "./Skeleton.scss";

const Skeleton: FC = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
    </div>
  );
};

export default Skeleton;
