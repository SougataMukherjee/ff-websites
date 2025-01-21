import React, { type FC } from "react";
import "./Card.scss";
import { CardProps } from "@/types/Card";

// Extend the CSSProperties to include `--i`
type ExtendedCSSProperties = React.CSSProperties & {
  "--i"?: string;
};

const Card: FC<CardProps> = ({
  cardProperties = {
    width: "300px",
    height: "400px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "16px",
    margin: "0",
    border: "none",
    className: "",
    style: {} as ExtendedCSSProperties,
    onClick: () => {},
  },
  headerContent,
  midContent,
  footerContent,
  isSkeleton = false,
}) => {
  const {
    width,
    height,
    background,
    borderRadius,
    boxShadow,
    padding,
    margin,
    border,
    className = "",
    style = {} as ExtendedCSSProperties,
  } = cardProperties;

  return (
    <section
      className={`ff-card ${className} ${isSkeleton ? "skeleton" : ""}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        boxShadow,
        padding,
        margin,
        border,
        ...style,
      }}
      onClick={cardProperties.onClick}
    >
      {headerContent?.isHeader && (
        <div className="ff-card-header">{headerContent.content}</div>
      )}
      {midContent?.isMidContent && (
        <div className="ff-card-content">{midContent.content}</div>
      )}
      {footerContent?.isFooter && (
        <div className="ff-card-footer">{footerContent.content}</div>
      )}
    </section>
  );
};

export default Card;
